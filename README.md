# Cupui - Json Parser and Masker

When working with APIs, managing and processing each request result can often be laborious and time-consuming. After experiencing this challenge firsthand for an extended period, So that's why i started working on this library. Go ahead for the Usage section for more details

![How does it work?](https://github.com/jamesmacedo/cupui-json/assets/158512794/7fdddf02-81cc-4b87-bf83-025734c0f90d)

# Installation

```bash
npm install cupui-json
```

# Usage 

Let's imagine that you'are consuming the Spotify Api, so there are many information that you don't actually really need to use in your project. What you have to do then? Usually you may need to manually select each of information that you need just like this:

```javascript

    const spotify_data = {
        "name":result.user.name,
        "my_url":result.user.url,
        "my_profile":result.user.profile,
        ...
    }

```

Using Cupui you can simply achieve this.

Here is an example using Axios to fetch the some data
### Defining the Schema 

```javascript

const my_shema = {
    "name":{
        target:"user.name"
    }, 
    "my_url":{
        target:"user.url"
    },
    "my_profile":{
        target:"user.profile",
        "modifier":(value)=>{
            const url_splited = value.split('/')
            return url_splited[url_splited.length -1]; // return just the file name, normally described as 'profile.png' 
        }
    },
}
```
### Parsing and retuning the data

```javascript
const cupui = new Cupui()

axios.get('/my_endpoint').then((result)=>{
	console.log(cupui.schema(my_schema).keep(result.data)) 
})
```

Simple like that!
