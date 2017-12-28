class Maybe<A> {
  private constructor(private _value: A | null) { }

  public then<B>(f: (_: A) => Maybe<B>): Maybe<B> {
    return this.match({
      Just: (x) => f(x),
      Nothing: () => Maybe.Nothing<B>()
    });
  }

  public static Just<T>(a: T): Maybe<T> {
    return new Maybe(a);
  }

  public static Nothing<T>(): Maybe<T> {
    return new Maybe<T>(null);
  }

  public match<B>(cases: {Just: (a: A) => B, Nothing: () => B}): B {
    if (this._value !== null) {
      return cases.Just(this._value);
    } else {
      return cases.Nothing();
    }
  }

  public assign<K extends string, B>(
    k: K, other: (Maybe<B> | ((a: A) => Maybe<B>))
  ): Maybe<A & {[k in K]: B}> {
    return this.then(
      a => {
        const maybe = other instanceof Maybe
          ? other : other(a);
        return maybe.then(
          b => Maybe.Just(
            Object.assign(
              {}, a, {[k.toString()]: b }
            ) as any
          )
        );
      }
    );
  }
}

function example(x: number): Maybe<number> {
  if (x >= 0) {
    return Maybe.Just(x);
  } else {
    return Maybe.Nothing();
  }
}