interface Key {
    previous: string | undefined,
    modifier: CallableFunction|undefined,
    parts: any[]
}

class Factory{ 

    delimiter: string
    currentKey: Key = {previous:'',modifier:undefined,parts:[]}
    //'sch' is the schema variable definition, due the existence of the method 'schema' 
    sch: any

    constructor(delimiter: string = '.'){ 
        this.delimiter = delimiter;
    }

    private search(obj: any): object | null{
        for(const chave in obj){ 
            if(obj.hasOwnProperty(chave)){
                var valor:any = obj[chave];
                if(chave === this.currentKey.parts[0]){
                    if(this.currentKey.parts.length > 0){
                        if(typeof valor === 'object'){
                            this.currentKey.previous = this.currentKey.parts.shift()
                            if(Array.isArray(valor)){
                                valor = valor[this.currentKey.parts[0]] 
                                this.currentKey.previous = this.currentKey.parts.shift()
                            }
                            const resultado = this.search(valor); 
                            if (resultado != null){
                                return resultado
                            }
                        }
                    }
                    return valor
                }
            }
        } 
        return null;
    }

    private key(key: {[key:number]: any}): Key{
        let splitedChave: Array<string> = key['target'].split(this.delimiter);
        if(splitedChave.length==0){
            return {previous: '',modifier:key['modifier'],parts:splitedChave} 
        }  
        // for(const k in splitedChave){
        //     if(!isNaN(splitedChave[k])) splitedChave[k] = parseInt(splitedChave[k]);
        // } 
        return {previous: '', modifier:key['modifier'],parts:splitedChave};
    }

    public schema(schema: object){
        if (typeof schema !== 'object'){
            console.log("Please provide an Object as schema!");
            return this;
        }
        this.sch = schema
        return this
    }

    public keep(data: object){     
        if(typeof data !== 'object'){
            console.log('Please provide a JSON')
        }
        //TODO: understand about object ans arrays of objects in typescript 
        var d: {[key:string]: object| null;} = {}
        for(const chave in this.sch){ 
            this.currentKey = this.key(this.sch[chave]);
            var found = this.search(data);
            d[chave] = typeof this.currentKey.modifier !== 'undefined' ? this.currentKey.modifier(found):found 
        }
        return d
    }
}

export default Factory 
