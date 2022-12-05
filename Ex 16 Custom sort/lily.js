fetch("https://jsonplaceholder.typicode.com/posts")
  .then(response => response.json())
  .then(postdata => display(postdata));

let myarray = [];
let keys = [];

display = postdata => {
  myarray = postdata;
  displaytb(postdata);

  for (const key in postdata[0]) {
    keys.push(key);
  }
  let th = keys.map((element, index) => {
    return `<th>${element}<button onclick="up(${index})" > ⬆️ </button><button onclick="down(${index})" >⬇️ </button> </th>`;
  });

  document.getElementById("headrow").innerHTML = th.join(" ");
};

up = (index) => {
  let data = keys[index]
  // console.log(keys[index])
  console.log(data);

  let sorting = myarray.sort((a, b) => {
    if (a[data] > b[data]) {
      return 1
    }
    else {
      return -1
    }
  })
  displaytb(sorting);
  console.log(sorting);

}
down = (index) => {
  let data = keys[index]
  console.log(data);

  let sorting = myarray.sort((a, b) => {
    if (b[data] > a[data]) {
      return 1
    }
    else {
      return -1
    }
  })
  displaytb(sorting);
  console.log(sorting);

}

displaytb = value => {
  let tbodycontent = myarray.map(element => {
    return ` <tr> <td> ${element.userId} </td> 
             <td> ${element.id} </td> 
             <td> ${element.title} </td> 
             <td> ${element.body} </td> </tr> `;
  });
  document.getElementById("tbl").innerHTML = tbodycontent.join(" ");
};
