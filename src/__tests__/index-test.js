import styleWithProps from '../index';

global.CURRENTLY_TESTING = true;

const MOCKED_APHRODITE_OBJECT = {
  _len: 209,
  _name: 'headerWrapper_cwpl5d',
  _definition: {
    alignItems: 'center',
    height: '50.6rem',
    backgroundColor: 'rgb(46, 176, 244)'
  }
};

const MOCKED_APHRODITE_OBJECT_2 = {
  _len: 54,
  _name: 'headerLogoText_8bo1c3',
  _definition: {
    color: 'white',
    fontSize: '2.4rem',
    fontWeight: 700
  }
};

describe('StyleWithProps', () => {
  it('should accepts null or undefined', () => {
    expect(styleWithProps(null)).toMatchSnapshot();
  });

  it('should accept plain object', () => {
    expect(styleWithProps({flex: 1, flexDirection: 'row'})).toMatchSnapshot();
  });

  it('should accept array of plain objects', () => {
    expect(
      styleWithProps([
        {flex: 1, flexDirection: 'row'},
        {flex: 2, alignItems: 'center'}
      ])
    ).toMatchSnapshot();
  });

  it('should accept aphrodite object', () => {
    expect(styleWithProps(MOCKED_APHRODITE_OBJECT)).toMatchSnapshot();
  });

  it('should accept array of aphrodite objects', () => {
    expect(
      styleWithProps([MOCKED_APHRODITE_OBJECT, MOCKED_APHRODITE_OBJECT_2])
    ).toMatchSnapshot();
  });

  it('should accept array of mixed objects', () => {
    expect(
      styleWithProps([MOCKED_APHRODITE_OBJECT, {flex: 1, flexDirection: 'row'}])
    ).toMatchSnapshot();
    expect(styleWithProps([null, {flex: 1}])).toMatchSnapshot();
    expect(styleWithProps([MOCKED_APHRODITE_OBJECT, null])).toMatchSnapshot();
  });

  it('should accept nested array and complex mixture of objects', () => {
    expect(
      styleWithProps([
        [MOCKED_APHRODITE_OBJECT, null],
        {flex: 1},
        null,
        MOCKED_APHRODITE_OBJECT_2,
        [[{flexDiretion: 'row'}]]
      ])
    ).toMatchSnapshot();
  });
});
