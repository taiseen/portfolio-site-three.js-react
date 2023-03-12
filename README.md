> 02 - March - 2023

# Portfolio Site | [Live Link](https://p2-site-3js.netlify.app)

## Technology used:
* React
* Three.js
* Tailwind-CSS

## Yarn Dependencies:
* yarn add react-simple-maps
* yarn add react-hook-form
* yarn add prop-types
* yarn add @emailjs/browser
* yarn add three
* yarn add @react-three/fiber
* yarn add @react-three/drei
* yarn add @react-three/postprocessing
* npm install -g gltf-pipeline

## Learning context:
* No Scrollbar
* Scroll Snap Effect
* scrolling mouse animation...
* at tailwind.config file url img path calling time avoid (.) at start
* dynamically pass content value at pseudo ::after class at mouse hover effect
* using of react-map & its use cases...
* using of @emailjs/browser form client side to mail box
* loading data from environment variables in vite project
* emailJs with react-hook-form combination data sending
* interact with threeJs Canvas & other materials objects...
* dynamically load/render components from a list name hovering...


## Converting 3D model into JSX, has some steps...

* 1st download [glTF] formate data from website
    * [Sketchfab](https://sketchfab.com) for 3D Models...

### glTF Pipeline

```
gltf-pipeline -i [inputFileName].gltf -o [outputFileName].gltf -d
```

### glTF to jsx
```
npx gltfjsx [outputFileName].gltf --transform
```

<br />

### tailwind-css 
```jsx
parent --> h-screen snap-y snap-mandatory overflow-y-scroll scroll-smooth
children --> h-screen snap-center
```