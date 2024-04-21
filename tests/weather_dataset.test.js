const Factory = require('../dist/cupui.cjs.js') 
const data = require('./data/weather.json') 

const cupui = new Factory()

//weather dataset
describe('weather database testing',()=>{
    it('should return an object with "country" and "cloud"', () => {
        const expected = {'country':'BR','cloud':20}
        expect(cupui.schema({'country':{'target':'sys.country'},'cloud':{target:'clouds.all'}}).keep(data)).toMatchObject(expected);
    })
})

describe('testing the array features',()=>{
    it('should return the array length equal two', () => {
        const result = cupui.schema({'weather':{'target':'weather'}}).keep(data)
        expect(result.weather.length).toEqual(2);
    }) 

    it('should return the secound object in array', () => {
        const result = cupui.schema({'weather':{'target':'weather.1'}}).keep(data)
        expect(result.weather.description).toEqual('fewer clouds');
    }) 

})
