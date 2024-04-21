const Factory = require('../dist/factory.cjs.js') 
const data = require('./data/weather.json') 

const cupui = new Factory()

//weather dataset
describe('weather database testing',()=>{
    it('should return an object with "country" and "cloud"', () => {
        const expected = {'country':'BR','cloud':20}
        expect(cupui.schema({'country':{'target':'sys.country'},'cloud':{target:'clouds.all'}}).keep(data)).toMatchObject(expected);
    })
    
})

