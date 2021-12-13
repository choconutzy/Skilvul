const hewan = [
    {id: 1, nama: 'Snowy', spesies: 'kucing'},
    {id: 2, nama: 'Blacki', spesies: 'anjing'},
    {id: 3, nama: 'Molly', spesies: 'kucing'},
    {id: 4, nama: 'Milo', spesies: 'kelinci'},
    {id: 5, nama: 'Rere', spesies: 'kucing'},
  ]

module.exports = {
    get: ()=> {
        return hewan;
    },
    create: (payload) =>{
        const newHewan = {};
        newHewan.id = hewan[hewan.length -1].id +1;
        hewan.push({...newHewan, ...payload});
        return hewan;
    }
}