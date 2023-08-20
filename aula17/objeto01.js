let amigo = {name: 'José',
 gender: 'M',
  wheight: 85,
grow(p=0){
    console.log('wasbig')
    this.wheight += p
}
}
amigo.grow(2)
console.log(`${amigo.name} have ${amigo.wheight} kg`)
