1. One to one
{
    "_id": "ObjectId('AAA')",
    "full_name": "John Doe",
    "email": "johndoe@gmail.com",
    "phone_number": "johndoe"
}
2. One to many
{
    "_id": "ObjectId('59673465')",
    "full_name": "John Doe",
    "phone_number": "johndoe",
    "address": [ "California street 22", "Kondang Merak street 35]
}
3. One to many
//product document
{
    "_id": "ObjectId('6435476')",
    "product_name": "John Doe",
    "brand_name": "Skilvul",
    "varian": [ "ObjectId('86345660')", "ObjectId('86456989')" ]
}
// varian document
    {
        "varian_id": ObjectId('86345660),
        "name" : "Kaos Polos Hitam",
        "color" : "Hitam",
        "quantity" : 12,
        "price" : 99000
    },
    {
        "varian_id": "ObjectId('86456989')",
        "name" : "Kaos Polos Navy",
        "color" : "Navy",
        "quantity" : 10,
        "price" : 99000
    }
4. Many to many
//films document

{
    "film_id" : "ObjectId('86345660')",
    "title" : "Venom 2"
    "cinema" : ["ObjectId('87436878')", "ObjectId('87436879')"]
},
{
    "film_id" : "ObjectId('86345661')",
    "title" : "Spiderman No Way Home"
    "cinema" : [ObjectId('87436878), ObjectId('87436879)]
}

// cinema document
{
    "_id" : "ObjectId('87436878')",
    "cinema_name" : "CGF",
    "films" : ["ObjectId('86345660')", "ObjectId('86345661')"]
    "location : "Pondok Indah Mall"
},
{
    "_id" : "ObjectId('87436879),"
    "cinema_name" : "CGF",
    "films" : ["ObjectId('86345660')", "ObjectId('86345661')"]
    "location : "Pondok Indah Mall"
}

