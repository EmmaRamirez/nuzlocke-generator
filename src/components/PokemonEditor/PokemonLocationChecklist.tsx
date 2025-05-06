import * as React from 'react';
import { Game, Pokemon, Boxes } from 'models';
import { Game as GameName, getEncounterMap, listOfGames } from 'utils';
import { State } from 'state';
import { PokemonIcon } from 'components/PokemonIcon';
import {  Callout, Classes, HTMLSelect, Icon, Intent, TextArea, Tooltip } from '@blueprintjs/core';
import { cx } from 'emotion';
import { useDispatch } from 'react-redux';
import { updateExcludedAreas, updateCustomAreas } from 'actions';


const EncounterMap = ({
    encounterMap,
    style,
    pokemon,
    currentGame,
    excludeGifts,
    displayHideArea,
    onClickHideArea,
}) => {
    return encounterMap.map((area) => {
        if (area === '') return null;
        return (
            <div
                key={area.toString()}
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    margin: '2px',
                    borderBottom: `1px solid ${style?.editorDarkMode ? '#333' : '#efefef'}`,
                }}>
                <LocationIcon
                    area={area}
                    pokemon={pokemon}
                    currentGame={currentGame}
                    excludeGifts={excludeGifts}
                />
                <div style={{ marginLeft: '4px' }}>{area}</div>
                {displayHideArea && <div role='menuitem' tabIndex={0} onKeyDown={onClickHideArea(area)} onClick={onClickHideArea(area)} style={{ marginLeft: 'auto', cursor: 'pointer' }}>
                    <Tooltip content={`Hide ${area}`}>
                        <Icon icon='cross' />
                    </Tooltip>
                </div>}
            </div>
        );
    });
};

const LocationIcon = ({ area, currentGame, excludeGifts, pokemon }: {
    area: string;
    currentGame: GameName;
    excludeGifts: boolean;
    pokemon: Pokemon[];
}) => {
    const poke = pokemon.find(poke => poke.met?.trim().toLocaleLowerCase() === area.toLocaleLowerCase() && (currentGame === 'None' || poke.gameOfOrigin === currentGame));

    if (poke && !poke.hidden && (!poke.gift || !excludeGifts)) {
        return (
            <>
                <Icon icon="tick" />
                <PokemonIcon style={{ pointerEvents: 'none'}} {...poke} />
            </>
        );
    }
    if (poke && poke.hidden) {
        return (
            <>
                <Icon icon="cross" />
                <PokemonIcon style={{ pointerEvents: 'none' }} {...poke} />
            </>
        );
    }
    return null;
};

export const PokemonLocationChecklist = ({
    pokemon,
    game,
    style,
    boxes,
    excludedAreas,
    customAreas,
}: {
    pokemon: Pokemon[];
    game: Game;
    style: State['style'];
    boxes: Boxes;
    excludedAreas: string[];
    customAreas: string[];
}) => {

    const calcTotals = (boxes, pokemon, encounterMap, currentGame) => {
        const encounterTotal = encounterMap.length;
        const totals = new Map();

        for (const box of boxes) {
            totals.set(box.name, 0);
            for (const poke of pokemon) {
                if (poke.status === box.name && (currentGame === 'None' || poke.gameOfOrigin === currentGame) && encounterMap.includes(poke.met)) {
                    const value = totals.get(box.name);
                    totals.set(box.name, value + 1);
                }
            }
        }

        const percentages: { key: string, percentage: string }[] = [];
        totals.forEach((total, key) => {
            const percentage = `${((total / encounterTotal) * 100).toFixed(1)}%`;
            percentages.push({ key, percentage });
        });
        return percentages;
    };

    const [excludeGifts, setExcludeGifts] = React.useState(false);
    const [currentGame, setCurrentGame] = React.useState<GameName>('None');
    const dispatch = useDispatch();
    const encounterMap = React.useMemo(() => getEncounterMap(game.name).concat(customAreas).filter(area => !excludedAreas.includes(area)), [game.name, excludedAreas, customAreas]);
    const totals = React.useMemo(() => calcTotals(boxes, pokemon, encounterMap, currentGame), [boxes, JSON.stringify(pokemon), encounterMap, currentGame]);
    const hideArea = (area: string) => () => dispatch(updateExcludedAreas([...excludedAreas, area]));

    const updateExcludedAreasFromText = (event) => {
        const value = event.currentTarget.value;
        const areas = value.split('\n');
        console.log('areas', value, areas);
        dispatch(updateExcludedAreas(areas));
    };

    const updateCustomAreasFromText = (event) => {
        const value = event.currentTarget.value;
        const areas = value.split('\n');
        console.log('areas', value, areas);
        dispatch(updateCustomAreas(areas));
    };


    React.useEffect(() => {
        console.log('excludedAreas', excludedAreas);
    }, [excludedAreas]);

    const colors = ['#0e1d6b', '#468189', '#77ACA2', '#9DBEBB', '#F4E9CD', '#0DAB76', '#139A43', '#D4AFB9', '#9CADCE'];

    const buildTotals = (percentages: { key: string, percentage: string }[]) => {
        return <Tooltip content={
            <>
                {percentages.map((percentage, idx) => <div key={percentage.key}>
                    <div style={{ display: 'inline-block', width: '0.5rem', height: '0.5rem', borderRadius: '50%', background: colors[idx], marginRight: '0.25rem' }}></div>
                    {percentage.key}: {percentage.percentage}
                </div>)}
            </>
        }><div style={{
                height: '1rem',
                width: '25rem',
                background: style?.editorDarkMode ? '#333' : '#eee',
                borderRadius: '.25rem',
                border: '1px solid #ccc',
                overflow: 'hidden',
            }}>
                {percentages.map((percentage, idx) => {
                    return <div key={percentage.key} style={{ width: percentage.percentage, height: '1rem', background: colors[idx], display: 'inline-block' }}></div>;
                })}
            </div>
        </Tooltip>;
    };

    return (
        <div>
            <div className={'flex items-center justify-between'}>
                <label className={cx(Classes.CONTROL, Classes.CHECKBOX)} style={{margin: '.25rem 0' }}>
                    <input type='checkbox' checked={excludeGifts} onChange={e => setExcludeGifts(e?.target.checked)} />
                    <span className={Classes.CONTROL_INDICATOR}></span>
                    <span className={Classes.LABEL}>Exclude Gifts</span>
                </label>
                <label className={cx(Classes.CONTROL)} style={{margin: '.25rem 0'}}>
                    <span className={Classes.LABEL}>Filter by Game</span>
                    <HTMLSelect style={{marginLeft: '0.25rem'}} onChange={e => setCurrentGame(e?.target.value as GameName)}>
                        {listOfGames.map(game => <option key={game}>{game}</option>)}
                    </HTMLSelect>
                </label>
            </div>
            <div className='flex' style={{ justifyContent: 'center' }}>
                {buildTotals(totals)}
            </div>
            <EncounterMap
                encounterMap={encounterMap}
                pokemon={pokemon}
                style={style}
                currentGame={currentGame}
                excludeGifts={excludeGifts}
                displayHideArea={true}
                onClickHideArea={hideArea}
            />
            <div style={{ padding: '0.25rem' }}>
                <div>Excluded Areas</div>
                <TextArea
                    fill
                    name='excludedAreas'
                    onChange={updateExcludedAreasFromText}
                    value={excludedAreas.join('\n')}
                />
                <div>Custom Areas</div>
                <TextArea
                    fill
                    name='customAreas'
                    onChange={updateCustomAreasFromText}
                    value={customAreas.join('\n')}
                />
            </div>
            <Callout intent={Intent.WARNING} style={{ fontSize: '80%', marginTop: '0.5rem' }}>
                Tip: Pokémon with the "hidden" attribute are a great option for including Pokemon
                that got away on a certain route!
            </Callout>
        </div>
    );
};

export default PokemonLocationChecklist;