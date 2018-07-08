import { configure } from 'enzyme';
const EnzymeAdapter = require('enzyme-adapter-react-16');

(global as any).requestAnimation = cb => setTimeout(cb, 0);

require('jest-enzyme');

// Setup enzyme's react adapter
configure({ adapter: new EnzymeAdapter() });