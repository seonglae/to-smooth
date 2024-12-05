<h1 align="center">To Smooth</h1>
<h3 align="center">
Make your lines to curves</h3>
<p align="center">
 <a href="https://www.npmjs.com/package/to-smooth"><img alt="downloads" src="https://img.shields.io/npm/d18m/to-smooth"/>
 </a>
<p>

[Chaikin's smoothing algorithm](http://www.idav.ucdavis.edu/education/CAGDNotes/Chaikins-Algorithm/Chaikins-Algorithm.html) for polylines of any dimensions.
Impressed by [chaikin-smooth](https://github.com/Jam3/chaikin-smooth) but, to-smooth is dimension generalized version of [chaikin-smooth](https://github.com/Jam3/chaikin-smooth) with iteration option.
 
You can use to-smooth instead of chaikin-smooth

 
 
<h1 align="center"><a href="https://openlayers.org/en/latest/examples/chaikin.html">Demo</a></h1>

<h3 align="center">
From</h3>

<p align="center">
 <img src="https://user-images.githubusercontent.com/27716524/123362217-4e04e680-d5ab-11eb-842d-4fe9d586bbe1.png"/>
 </img>
<p>


<h3 align="center">
To
</h3>
<p align="center">
 <img src="https://user-images.githubusercontent.com/27716524/123362234-51986d80-d5ab-11eb-95ec-f748cdb5f822.png"/>
 </img>
<p>
 
<br/>
 
# Usage
```js
import smooth from 'to-curve'
import geojson from 'geojson.json'


if (geojson.geometry.type === 'LineString')
  geojson.geometry.coordinates = smooth(geojson.geometry.coordinates)
else if (geojson.geometry.type === 'MultiLineString')
  geojson.geometry.coordinates = geojson.geometry.coordinates.map(points => smooth(points))
```

<br/>
 
# Docs
export default function
`smooth(points, options: {iteration, factor} = {iteration: 1, factor: 0.75})`


### points
same dimension point array like LineString Coordinates

- type - `Array<Array<number>>`

### options
- `iteration`
  - default - 1
  - description - if this increase, more smoother line return
  - iteration how many algorithm applied
- `factor`
  - default - 0.75
  - range - 0.5 - 1
  - do not have to change or assign



## License

MIT
