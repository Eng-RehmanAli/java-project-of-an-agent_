const roads=[
    "Alice's House-Bob's House", "Alice's House-Cabin",
 "Alice's House-Post Office", "Bob's House-Town Hall",
 "Daria's House-Ernie's House", "Daria's House-Town Hall",
 "Ernie's House-Grete's House", "Grete's House-Farm",
"Grete's House-Shop",
 "Marketplace-Post Office",
 "Marketplace-Town Hall",
 "Marketplace-Farm",
 "Marketplace-Shop",
 "Shop-Town Hall"
];


function  buildgraph(edges){
  let graph=Object.create(null);
function  addgraph(from,to){
  if(!graph[from].includes(to)){  // i add the includes to prevent the duplicate
     //  graph[from] pick the key,s value from the array 
    graph[from].push(to);
  }else{
    graph[from]=[to];   // it add a array on the on at the key belong like 
  }
}
// use of the for of and  array destructring [from ,to]   used to map because we want to  create a 
// what  [from,to ] take the first valeu in the form and second  in the to and furthur so 
for(let [from,to] of edges.map(r=>r.split("-"))){
      addgraph(from,to);  //
      addgraph(to,from); //  it will  make the grapg of the each position 
}
// and know we are returing a graph  mean a object 
return graph;
}
// calling  the buildgraph function
const result=buildgraph(roads);
class Villagedeen{
    constructor(place,parcel){
        this.place=place;
        this.parcel=parcel;
    }
    move(destination){
        if(!result[this.place].includes(destination)){
            // if it is not included then it will return the same place not to move
            return this;
        }else{
         let parcel=this.parcel.map(p=>{
            if(p.place!=this.place){
                 return ;
            }else{
                return {place:destination,address:p.adress};

            }
         }).filter(p=>p.place!=p.address);
         return Villagedeen(destination,parcel);
    }
   }
}
Villagedeen.random=function(count=5){
    let parcel=[];
    let places=Object.keys(result);
 
  for(let  i=0;i<count;i++){
    let adress=randompic(places);
    let place;
    do{
    place=randompic(places);

    }while(adress===place);   
    parcel.push(place,adress);
  }
    return new Villagedeen("Post Office",places);
}
