import "./Categories.css";

function Categories(){

const categories = [
  "🎵 Music",
  "💃 Dance",
  "🎤 Singing",
  "🚶 Ramp Walk",
  "🎭 Drama",
  "💻 Tech Fest"
];


return(

<div className="category-page">


<h1>
🎉 Event Categories
</h1>


<div className="category-grid">


{
categories.map((cat,index)=>(

<div 
className="category-card"
key={index}
>

{cat}

</div>

))

}


</div>


</div>

);

}

export default Categories;