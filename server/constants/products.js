const products = [
    { 
        url: 'https://rukminim1.flixcart.com/image/150/150/kapoo7k0/electric-kettle/p/6/s/pigeon-favourite-original-imafs7xhj5uwgrh4.jpeg?q=70', 
        detailUrl: 'https://rukminim1.flixcart.com/image/416/416/kapoo7k0/electric-kettle/p/6/s/pigeon-favourite-original-imafs7xhj5uwgrh4.jpeg?q=70',
        title: {
            shortTitle: 'Electric Kettle',
            longTitle: 'Pigeon FAVOURITE Electric Kettle  (1.5 L, Silver, Black)'
        },
        price: {
            mrp: 1195,
            cost: 625,
            discount: '47%'
        },
        qty: 1,
        rating: 3.4,
        discount: 'Extra 10% Off', 
        subCategory: 'electrickettle',
        tagline: 'Deal of the day',
        category: 'appliances'

    },
    {
        url: 'https://rukminim1.flixcart.com/image/416/416/kl6wx3k0/sandwich-maker/8/r/d/sandwich-01-flipkart-smartbuy-original-imagydds4zthxt8z.jpeg?q=70', 
        detailUrl: 'https://rukminim1.flixcart.com/image/416/416/kl6wx3k0/sandwich-maker/8/r/d/sandwich-01-flipkart-smartbuy-original-imagydds4zthxt8z.jpeg?q=70',
        title: {
            shortTitle: 'Sandwich Makers',
            longTitle: 'Flipkart SmartBuy Sandwich 01 Grill  (Black)'
        },
        price: {
            mrp: 1499,
            cost: 899,
            discount: '40%'
        },
        qty: 1,
        rating: 3.2,
        discount: 'From 99+5% Off', 
        subCategory: 'sandwichmakers',
        tagline: 'Pestige, Nova & more',
        category: 'appliances'
    },
    {
        url: 'https://rukminim1.flixcart.com/image/150/150/kohigsw0/resistance-tube/c/s/e/new-adjustable-single-resistance-tube-multicolor-na-ajro-deal-original-imag2xg88mhmwxz5.jpeg?q=70', 
        detailUrl: 'https://rukminim1.flixcart.com/image/416/416/kohigsw0/resistance-tube/c/s/e/new-adjustable-single-resistance-tube-multicolor-na-ajro-deal-original-imag2xg88mhmwxz5.jpeg?q=70',
        title: {
            shortTitle: 'Fitness Gear',
            longTitle: 'AJRO DEAL New Adjustable Single Resistance Tube (Multicolor) Resistance Tube  (Multicolor)'
        }, 
        price: {
            mrp: 499,
            cost: 166,
            discount: '66%'
        },
        qty: 1,
        rating: 4,
        discount: 'Upto 70% Off', 
        subCategory: 'fitnessgear',
        tagline: 'Deal of the Day',
        category: 'gadget'
    },
    {
        url: 'https://rukminim1.flixcart.com/image/300/300/kll7bm80/smartwatch/c/1/n/43-mo-sw-sense-500-android-ios-molife-original-imagyzyycnpujyjh.jpeg?q=70', 
        detailUrl: 'https://rukminim1.flixcart.com/image/416/416/kll7bm80/smartwatch/c/1/n/43-mo-sw-sense-500-android-ios-molife-original-imagyzyycnpujyjh.jpeg?q=70',
        title: {
            shortTitle: 'Smart Watches',
            longTitle: 'Molife Sense 500 Smartwatch  (Black Strap, Freesize)',
        }, 
        price: {
            mrp: 6999,
            cost: 4049,
            discount: '42%'
        },
        qty: 1,
        rating:4.2,
        discount: 'Grab Now', 
        subCategory: 'watche',
        tagline: 'Best Seller',
        category: 'gadget'
    },
    { 
        url: 'https://rukminim1.flixcart.com/image/416/416/k3uhhu80/hair-dryer/n/m/t/nova-2800-w-professional-nhp-8220-original-imafmvwfhmzsxdrw.jpeg?q=70',
        detailUrl: 'https://rukminim1.flixcart.com/image/416/416/k3uhhu80/hair-dryer/n/m/t/nova-2800-w-professional-nhp-8220-original-imafmvwfhmzsxdrw.jpeg?q=70',
        title: {
            shortTitle: 'Hair Dryers',
            longTitle: 'Nova Professional NHP 8220 Hair Dryer  (1800 W, Multicolor)'
        }, 
        price: {
            mrp: 1899,
            cost: 1124,
            discount: '40%'
        },
        qty: 1,
        rating:4.1,
        discount: 'From ₹499', 
        subCategory: 'hairdryers',
        tagline: 'Kubra, Nova & more',
        category: 'appliances'
    },
    {
        url: 'https://rukminim1.flixcart.com/image/150/150/kk01pjk0/fan/d/d/l/tiktik-quiet-portable-table-fan-zigma-original-imafzg7ftzuckpad.jpeg?q=70',
        detailUrl: 'https://rukminim1.flixcart.com/image/416/416/kk01pjk0/fan/d/d/l/tiktik-quiet-portable-table-fan-zigma-original-imafzg7ftzuckpad.jpeg?q=70',
        title: {
            shortTitle: 'Table Fans',
            longTitle: 'Portable 300 mm Ultra High Speed 3 Blade Table Fan  (Black, Pack of 1)'
        }, 
        price: {
            mrp: 2250,
            cost: 1199,
            discount: '46%'
        },
        qty: 1,
        
        subCategory: 'tablefans',
        discount: 'Minimum 40% Off', 
        tagline: 'Top Selling',
        category: 'appliances'
    },
    {
        url: 'https://rukminim1.flixcart.com/image/150/150/kcgk1ow0/headphone/n/u/a/235v2-fast-charging-boat-original-imaftk6us4af7bca.jpeg?q=70',
        detailUrl: 'https://rukminim1.flixcart.com/image/416/416/kcgk1ow0/headphone/n/u/a/235v2-fast-charging-boat-original-imaftk6us4af7bca.jpeg?q=70',
        title: {
            shortTitle: 'Headphones',
            longTitle: 'boAt Rockerz 235v2 with ASAP charging Version 5.0 Bluetooth Headset '
        }, 
        price: {
            mrp: 2990,
            cost: 1199,
            discount: '59%'
        },
        qty: 1,
        rating: 3.6,
        discount: 'Minimum 50% Off', 
        subCategory: 'headphones',
        tagline: 'Grab Now!',
        category: 'gadget'
    },
    {
    url: 'https://rukminim1.flixcart.com/image/416/416/kcuug7k0/dining-table/n/g/g/4-seater-rosewood-sheesham-kw-ki128-kendalwood-furniture-natural-original-imaftwyq6jyycg67.jpeg?q=70',
    detailUrl: 'https://rukminim1.flixcart.com/image/416/416/kcuug7k0/dining-table/n/g/g/4-seater-rosewood-sheesham-kw-ki128-kendalwood-furniture-natural-original-imaftwyrv4zvtez2.jpeg?q=70',
    title: {
      shortTitle: "Kendalwood Furniture Solid Wood 4 Seater Dining Table",
      longTitle:
        "Kendalwood Furniture Solid Wood 4 Seater Dining Table  (Finish Color - Natural Teak, DIY(Do-It-Yourself))",
    },
    price: {
      mrp: 15000,
      cost: 6501,
      discount: "56%",
    },
    qty: 1,
    rating: 4.5,
    subCategory: 'furniture',
    discount: "Extra ₹723 off",
    tagline: "Trending",
    category: "furniture"
    },
    { 
        url: 'https://rukminim2.flixcart.com/image/612/612/l0h1g280/t-shirt/1/i/q/4xl-mfk-8948-o-01-black-mufti-original-imagc8ydvzh2czsm.jpeg?q=70',
        detailUrl: 'https://rukminim2.flixcart.com/image/832/832/l4vnbm80/t-shirt/0/d/1/m-askporgfj72665-new-allen-solly-original-imagfzk8yfy9bhq8.jpeg?q=70',
        title: {
            shortTitle: 'Black T-Shirt',
            longTitle: 'Men Solid Polo Neck Pure Cotton Black T-Shirt',
        },
        price: {
            mrp: 1979,
            cost: 979,
            discount: '51%'
        },
        qty: 1,
        rating: 4.2,
        discount: 'Extra 10% Off', 
        subCategory: 'tshirt',
        tagline: 'Trending',
        category: 'cloth'

    },

    { 
        url: 'https://rukminim2.flixcart.com/image/612/612/xif0q/t-shirt/j/4/j/m-auk0164-ausk-original-imagzbp8thhsa5y5.jpeg?q=70',
        detailUrl:'https://rukminim2.flixcart.com/image/832/832/xif0q/t-shirt/j/4/j/m-auk0164-ausk-original-imagzbp8thhsa5y5.jpeg?q=70',
        title: {
            shortTitle: 'White T-Shirt',
            longTitle: 'Men Striped Round Neck Cotton Blend Light Blue, White T-Shirt',
        },
        price: {
            mrp: 1499,
            cost: 199,
            discount: '86%'
        },
        qty: 1,
        rating: 4,
        discount: 'Extra 13% Off', 
        tagline: 'Trending',
        subCategory: 'tshirt',
        category: 'cloth'

    },
    { 
        url: 'https://rukminim2.flixcart.com/image/612/612/xif0q/trouser/s/4/v/32-petfwulfu13584-peter-england-original-imagrgtfjfbgmgt9.jpeg?q=70',
        detailUrl:'https://rukminim2.flixcart.com/image/832/832/xif0q/trouser/s/4/v/32-petfwulfu13584-peter-england-original-imagrgtfjfbgmgt9.jpeg?q=70',
        title: {
            shortTitle: 'Trouser',
            longTitle: 'Men Slim Fit Green Polyester Trousers',
        },
        price: {
            mrp: 1999,
            cost: 1399,
            discount: '30%'
        },
        qty: 1,
        rating: 3.2,
        discount: 'Extra 5% Off', 
        tagline: 'Deal of the Day',
        subCategory: 'trouser',
        category: 'cloth'

    },
    { 
        url: 'https://rukminim2.flixcart.com/image/612/612/xif0q/trouser/v/x/5/38-t-130-trouser-baleno-black-aa-ad-av-original-imafw2jugbuxmnq9-bb.jpeg?q=70',
        detailUrl:'https://rukminim2.flixcart.com/image/832/832/xif0q/trouser/v/x/5/38-t-130-trouser-baleno-black-aa-ad-av-original-imafw2jugbuxmnq9-bb.jpeg?q=70',
        title: {
            shortTitle: 'Black Trouser',
            longTitle: 'Men Regular Fit Black Cotton Blend Trousers',
        },
        price: {
            mrp: 1546,
            cost: 449,
            discount: '70%'
        },
        qty: 1,
        rating: 3.4,
        discount: 'Extra 9% Off', 
        tagline: 'Deal of the Day',
        subCategory: 'trouser',
        category: 'cloth'

    },

    { 
        url: 'https://rukminim2.flixcart.com/image/612/612/kr3tj0w0/acoustic-guitar/f/d/d/med-blu-c-medellin-original-imag4yumsu5qmwca.jpeg?q=70',
        detailUrl:'https://rukminim2.flixcart.com/image/416/416/kr3tj0w0/acoustic-guitar/f/d/d/med-blu-c-medellin-original-imag4yumsu5qmwca.jpeg?q=70',
        title: {
            shortTitle: 'Rocking Guitar',
            longTitle: ' Medellin MED-BLU-C Acoustic Guitar Linden Wood Rosewood Right Hand Orientation  (Blue)',
        },
        price: {
            mrp: 5500,
            cost: 2199,
            discount: '60%'
        },
        qty: 1,
        rating: 4.6,
        discount: 'Extra 9% Off', 
        tagline: 'Deal of the Day',
        subCategory: 'guitar',
        category: 'Instruments'

    },
    { 
        url: 'https://rukminim2.flixcart.com/image/612/612/k01b8280/acoustic-guitar/t/f/a/rvl-38c-lgp-bk-revel-original-imafjx6hmdg9vczz.jpeg?q=70',
        detailUrl:'https://rukminim2.flixcart.com/image/416/416/k01b8280/acoustic-guitar/t/f/a/rvl-38c-lgp-bk-revel-original-imafjx6hmdg9vczz.jpeg?q=70',
        title: {
            shortTitle: 'Acoustic Guitar',
            longTitle:  'REVEL RVL-38C-LGP-BK Acoustic Guitar Linden Wood Ebony Right Hand Orientation (Black)',
        },
        price: {
            mrp: 6495,
            cost: 2199,
            discount: '66%'
        },
        qty: 1,
        rating: 4.2,
        discount: 'Extra 79% Off', 
        tagline: 'Deal of the Day',
        subCategory: 'guitar',
        category: 'instruments'

    },
    { 
        url: 'https://rukminim2.flixcart.com/image/612/612/kzpw2vk0/tabla/p/5/o/tabla-set-steel-bayan-nasir-ali-original-imagbnvzeduz4skk.jpeg?q=70',
        detailUrl:'https://rukminim2.flixcart.com/image/416/416/kzpw2vk0/tabla/p/5/o/tabla-set-steel-bayan-nasir-ali-original-imagbnvzeduz4skk.jpeg?q=70',
        title: {
            shortTitle: 'Tabla',
            longTitle:  'KHALSA MUSICAL quality Tabla Tabla  (Dayan - 13 cm, Bayan - 22 cm)',
        },
        price: {
            mrp: 8999,
            cost: 3949,
            discount: '56%'
        },
        qty: 1,
        rating: 4.1,
        discount: 'Extra Rs.80 Off', 
        tagline: 'Trending',
        subCategory: 'tabla',
        category: 'instruments'

    },
    { 
        url: 'https://rukminim2.flixcart.com/image/612/612/k5ihzm80/fitness-grip/8/d/b/sterling-hand-gripper-for-best-hand-exerciser-grip-adjustable-original-imaeucjfuphcbgdx.jpeg?q=70',
        detailUrl:'https://rukminim2.flixcart.com/image/416/416/k5ihzm80/fitness-grip/8/d/b/sterling-hand-gripper-for-best-hand-exerciser-grip-adjustable-original-imaeucjfuphcbgdx.jpeg?q=70',
        title: {
            shortTitle: 'Hand Grip/Fitness Grip',
            longTitle:  'Manogyam Hand Gripper For Best Hand Exerciser Grip Adjustable 10kg Hand Grip/ Hand Grip/Fitness Grip  (Black, Orange)',
        },
        price: {
            mrp:599,
            cost: 179,
            discount: '70%'
        },
        qty: 1,
        rating: 4.2,
        discount: 'Extra Rs.280 Off', 
        tagline: 'Trending',
        subCategory: 'fitnessgrip',
        category: 'gymEssentials'

    },
    { 
        url: 'https://rukminim2.flixcart.com/image/612/612/xif0q/dumbbell/p/r/i/pvc-dumbbells-pair-dumbbell-for-men-and-women-dumbbell-set-home-original-imaggww5hyarzz9f.jpeg?q=70',
        detailUrl:'https://rukminim2.flixcart.com/image/416/416/xif0q/dumbbell/p/r/i/pvc-dumbbells-pair-dumbbell-for-men-and-women-dumbbell-set-home-original-imaggww5hyarzz9f.jpeg?q=70',
        title: {
            shortTitle: 'Strauss PVC Dumbbell',
            longTitle:  'Strauss PVC Dumbbell | Gym Weight Dumbells For Men & Women, 1 Kg Each, Pair, (Blue) Fixed Weight Dumbbell  (2 kg)',
        },
        price: {
            mrp:313,
            cost: 454,
            discount: '31%'
        },
        qty: 1,
        rating: 3.9,
        discount: 'Extra 10% off', 
        tagline: 'Trending',
        subCategory: 'dumbell',
        category: 'gymEssentials'

    },
    { 
        url: 'https://rukminim2.flixcart.com/image/612/612/xif0q/kit/z/z/b/fitness-combo-of-toning-tube-with-hand-grip-for-body-workout-original-imagjz5hd2thdts8.jpeg?q=70',
        detailUrl:'https://rukminim2.flixcart.com/image/416/416/xif0q/dumbbell/p/r/i/pvc-dumbbells-pair-dumbbell-for-men-and-women-dumbbell-set-home-original-imaggww5hyarzz9f.jpeg?q=70',
        title: {
            shortTitle: 'Fitness Kit',
            longTitle:  'Manogyam Fitness Combo Of Toning Tube with Hand Grip for Body Workout Gym & Fitness Kit',
        },
        price: {
            mrp:699,
            cost: 289,
            discount: '58%'
        },
        qty: 1,
        rating: 4.1,
        discount: 'Extra Rs.600 off', 
        subCategory: 'fitnesskit',
        tagline: 'Trending',
        category: 'gymEssentials'

    },
    { 
        url: 'https://rukminim2.flixcart.com/image/612/612/xif0q/shopsy-dumbbell/a/t/w/hex-shape-pvc-solid-1kg-x-2pcs-2kg-dumbbells-2-jasmine-original-imagkqj2czvtfwph.jpeg?q=70',
        detailUrl:'https://rukminim2.flixcart.com/image/416/416/xif0q/shopsy-dumbbell/a/t/w/hex-shape-pvc-solid-1kg-x-2pcs-2kg-dumbbells-2-jasmine-original-imagkqj2czvtfwph.jpeg?q=70',
        title: {
            shortTitle: 'Dumbbell',
            longTitle:  'JASMINE 3Kg Pair PVC Black Fixed Weight Dumbbell (6 kg) Gym & Fitness Kit',
        },
        price: {
            mrp:999,
            cost: 399,
            discount: '60%'
        },
        qty: 1,
        rating: 3.8,
        discount: 'Extra 10% Off', 
        subCategory: 'dumbell',
        tagline: 'Deal of the day',
        category: 'gymEssentials'

    },
    { 
        url: 'https://rukminim2.flixcart.com/image/612/612/l5h2xe80/shirt/7/s/h/xs-juhg-try-this-original-imagg4wyccyjm3jf.jpeg?q=70',
        detailUrl:'https://rukminim2.flixcart.com/image/832/832/l5h2xe80/shirt/7/s/h/xs-juhg-try-this-original-imagg4wyccyjm3jf.jpeg?q=70',
        title: {
            shortTitle: 'Fancy Shirt',
            longTitle:  'Men Slim Fit Solid Mandarin Collar Casual Shirt',
            
        },
        price: {
            mrp:999,
            cost: 319,
            discount: '68%'
        },
        qty: 1,
        rating: 3.8,
        discount: 'Extra 10% Off', 
        subCategory: 'shirt',
        tagline: 'Lowest price in the year',
        category: 'cloth'

    },
   { 
        url: 'https://rukminim2.flixcart.com/image/612/612/xif0q/shirt/x/q/j/40-assfmmofz62701-allen-solly-original-imagrzmn8hgssgzb.jpeg?q=70',
        detailUrl:'https://rukminim2.flixcart.com/image/832/832/xif0q/shirt/n/u/c/40-assfmmofz62701-allen-solly-original-imagrzmnengskcpf.jpeg?q=70',
        title: {
            shortTitle: 'Fancy Shirt',
            longTitle:  'Men Regular Fit Printed Spread Collar Casual Shirt ',
            
        },
        price: {
            mrp:1599,
            cost: 1049,
            discount: '34%'
        },
        qty: 1,
        rating: 3.5,
        discount: 'Extra 6% off', 
        tagline: 'Hot Deal',
        subCategory: 'shirt',
        category: 'cloth'

    },
    { 
        url: 'https://rukminim2.flixcart.com/image/612/612/jzzvs7k0/shirt/h/a/h/l-c301-dustypink-dennis-lingo-original-imafjvx7c68n7vdz.jpeg?q=70',
        detailUrl: 'https://rukminim2.flixcart.com/image/832/832/jzzvs7k0/shirt/h/a/h/l-c301-dustypink-dennis-lingo-original-imafjvx7b9jguhdv.jpeg?q=70',
        title: {
            shortTitle: 'Fancy Shirt',
            longTitle:  'Men Slim Fit Solid Slim Collar Casual Shirt ',
            
        },
        price: {
            mrp:1849,
            cost: 489,
            discount: '73%'
        },
        qty: 1,
        rating: 4,
        discount: 'Extra 3% off', 
        subCategory: 'shirt',
        tagline: 'Hot Deal',
        category: 'cloth'

    },
    { 
        url: 'https://rukminim2.flixcart.com/image/612/612/jzzvs7k0/shirt/h/a/h/l-c301-dustypink-dennis-lingo-original-imafjvx7c68n7vdz.jpeg?q=70',
        detailUrl: 'https://rukminim2.flixcart.com/image/832/832/jzzvs7k0/shirt/h/a/h/l-c301-dustypink-dennis-lingo-original-imafjvx7b9jguhdv.jpeg?q=70',
        title: {
            shortTitle: 'Fancy Shirt',
            longTitle:  'Men Slim Fit Solid Slim Collar Casual Shirt ',
            
        },
        price: {
            mrp:1849,
            cost: 489,
            discount: '73%'
        },
        qty: 1,
        rating: 4,
        discount: 'Extra 4% off', 
        subCategory: 'shirt',
        tagline: 'Hot Deal',
        category: 'cloth'

    },
    { 
        url: 'https://rukminim2.flixcart.com/image/612/612/xif0q/shirt/b/1/g/m-st39-vebnor-original-imagrvfs3e5typze.jpeg?q=70',
        detailUrl: 'https://rukminim2.flixcart.com/image/832/832/xif0q/shirt/b/1/g/m-st39-vebnor-original-imagrvfs3e5typze.jpeg?q=70',
        title: {
            shortTitle: 'Fancy Shirt',
            longTitle:  'Men Regular Fit Checkered Spread Collar Casual Shirt',
            
        },
        price: {
            mrp:1849,
            cost: 289,
            discount: '84%'
        },
        qty: 1,
        rating: 4,
        discount: 'Extra 2% off', 
        tagline: 'Special Prize',
        subCategory: 'shirt',
        category: 'cloth'

    },
    { 
        url: 'https://rukminim2.flixcart.com/image/612/612/xif0q/shirt/b/1/g/m-st39-vebnor-original-imagrvfs3e5typze.jpeg?q=70',
        detailUrl: 'https://rukminim2.flixcart.com/image/832/832/xif0q/shirt/b/1/g/m-st39-vebnor-original-imagrvfs3e5typze.jpeg?q=70',
        title: {
            shortTitle: 'Fancy Shirt',
            longTitle:  'Men Regular Fit Checkered Spread Collar Casual Shirt',
            
        },
        price: {
            mrp:1849,
            cost: 289,
            discount: '84%'
        },
        qty: 1,
        rating: 4,
        discount: 'Extra 2% off', 
        tagline: 'Special Prize',
        subCategory: 'shirt',
        category: 'cloth'

    },
    { 
        url: 'https://rukminim2.flixcart.com/image/612/612/xif0q/remote-control-toy/u/1/r/high-speed-mini-1-24-scale-rechargeable-remote-control-car-with-original-imagh2yrmfmgpgyr.jpeg?q=70',
        detailUrl: 'https://rukminim2.flixcart.com/image/416/416/xif0q/remote-control-toy/u/1/r/high-speed-mini-1-24-scale-rechargeable-remote-control-car-with-original-imagh2yrmfmgpgyr.jpeg?q=70',
        title: {
            shortTitle: 'Remote Control Car',
            longTitle:  'Wembley High Speed Mini 1:24 Scale Rechargeable Remote Control car with Lithium Battery  (Grey and Black)',
            
        },
        price: {
            mrp:1449,
            cost: 709,
            discount: '52%'
        },
        qty: 1,
        rating: 3.7,
        discount: 'Extra 10% off', 
        tagline: 'Special Prize',
        subCategory: 'remotecontrolcar',
        category: 'toysAndGames'

    },
    { 
        url: 'https://rukminim2.flixcart.com/image/612/612/xif0q/remote-control-toy/8/r/f/high-speed-mini-1-24-scale-rechargeable-remote-control-car-with-original-imagkw4cvsh73vdn.jpeg?q=70',
        detailUrl: 'https://rukminim2.flixcart.com/image/416/416/xif0q/remote-control-toy/8/r/f/high-speed-mini-1-24-scale-rechargeable-remote-control-car-with-original-imagkw4cvsh73vdn.jpeg?q=70',
        title: {
            shortTitle: 'Remote Control Car',
            longTitle:  'Wembley High Speed Mini 1:24 Scale Rechargeable Remote Control car with Lithium Battery  (Black and Orange)',

            
        },
        price: {
            mrp:1449,
            cost: 709,
            discount: '52%'
        },
        qty: 1,
        rating: 3.7,
        discount: 'Extra 12% off', 
        tagline: 'Special Prize',
        subCategory: 'remotecontrolcar',
        category: 'toysAndGames'

    },
    { 
        url: 'https://rukminim2.flixcart.com/image/612/612/khuvxjk0-0/vehicle-pull-along/x/w/y/friction-powered-mini-monster-cars-for-kids-with-big-rubber-original-imafxruqgz7rw4xw.jpeg?q=70',
        detailUrl: 'https://rukminim2.flixcart.com/image/416/416/khuvxjk0-0/vehicle-pull-along/x/w/y/friction-powered-mini-monster-cars-for-kids-with-big-rubber-original-imafxruqgz7rw4xw.jpeg?q=70',
        title: {
            shortTitle: 'Toy Trucks',
            longTitle:  'TITIRANGI 4 Pack 4WD Monster Truck Cars,Push and Go Toy Trucks Friction Powered Cars 4 Wheel Drive Vehicles for Toddlers Children Boys Girls Kids Gift-4PCS  (Multicolor) ',

            
        },
        price: {
            mrp:999,
            cost: 264,
            discount: '73%'
        },
        qty: 1,
        rating: 4.2,
        discount: 'Extra 5% off', 
        tagline: 'Special Prize',
        subCategory: 'toytrucks',
        category: 'toysAndGames'

    },
    { 
        url: 'https://rukminim2.flixcart.com/image/612/612/xif0q/remote-control-toy/4/1/3/suv-open-roof-hot-metal-jeep-with-3openable-doors-and-pull-back-original-imagrgb4bkpwqrg4.jpeg?q=70',
        detailUrl: 'https://rukminim2.flixcart.com/image/416/416/xif0q/remote-control-toy/4/1/3/suv-open-roof-hot-metal-jeep-with-3openable-doors-and-pull-back-original-imagrgb4bkpwqrg4.jpeg?q=70',
        title: {
            shortTitle: 'TUC SUV Open roof',
            longTitle:  ' TUC SUV Open roof Hot Metal Jeep with 3Openable Doors and Pull Back Function  (Yellow)',

            
        },
        price: {
            mrp:999,
            cost: 382,
            discount: '61%'
        },
        qty: 1,
        rating: 4.2,
        discount: 'Extra 7% off', 
        tagline: 'Special Prize',
        category: 'toysAndGames',
        subCategory: 'toytrucks'

    },
    { 
        url: 'https://rukminim2.flixcart.com/image/612/612/xif0q/remote-control-toy/4/1/3/suv-open-roof-hot-metal-jeep-with-3openable-doors-and-pull-back-original-imagrgb4bkpwqrg4.jpeg?q=70',
        detailUrl: 'https://rukminim2.flixcart.com/image/416/416/xif0q/remote-control-toy/4/1/3/suv-open-roof-hot-metal-jeep-with-3openable-doors-and-pull-back-original-imagrgb4bkpwqrg4.jpeg?q=70',
        title: {
            shortTitle: 'TUC SUV Open roof',
            longTitle:  ' TUC SUV Open roof Hot Metal Jeep with 3Openable Doors and Pull Back Function  (Yellow)',            
        },
        price: {
            mrp:999,
            cost: 382,
            discount: '61%'
        },
        qty: 1,
        rating: 4.2,
        discount: 'Extra 10% off', 
        tagline: 'Special Prize',
        subCategory: 'toytrucks',
        category: 'toysAndGames'


    },
    { 
        url: 'https://rukminim2.flixcart.com/image/612/612/xif0q/fan/x/e/l/studio-32-1-ceiling-fan-1200-atomberg-original-imagg25aufeyvxrg.jpeg?q=70',
        detailUrl: 'https://rukminim2.flixcart.com/image/416/416/xif0q/fan/x/e/l/studio-32-1-ceiling-fan-1200-atomberg-original-imagg25aufeyvxrg.jpeg?q=70',
        title: {
            shortTitle: 'Ceiling Fan',
            longTitle:  ' Atomberg Studio+ Ceiling Fan 1200MM-Earth Brown 5 Star 1200 mm BLDC Motor with Remote 3 Blade Ceiling Fan  (Earth Brown, Pack of 1)',

            
        },
        price: {
            mrp:7799,
            cost: 5006,
            discount: '35%'
        },
        qty: 1,
        rating: 4.2,
        discount: 'Extra ₹264 off', 
        subCategory: 'fan',
        tagline:'Hot Deal' ,
        category: 'appliances'

    },

    { 
        url: 'https://rukminim2.flixcart.com/image/612/612/kg6vfrk0/water-geyser/z/k/h/eterno-pro-sp-10-l-2000-racold-10-original-imafwh4p9yehzyey.jpeg?q=70',
        detailUrl: 'https://rukminim2.flixcart.com/image/416/416/kg6vfrk0/water-geyser/z/k/h/eterno-pro-sp-10-l-2000-racold-10-original-imafwh4p9yehzyey.jpeg?q=70',
        title: {
            shortTitle: 'Geyser',
            longTitle:  ' Racold 25 L Storage Water Geyser (Eterno Pro 25 L, White) ',

        },
        price: {
            mrp:16899,
            cost: 9499,
            discount: '43%'
        },
        qty: 1,
        rating: 4.4,
        discount:'Extra ₹500 off' , 
        tagline: 'Hot Deal',
        category: 'appliances',
        subCategory: 'geyser'
    },
    { 
        url: 'https://rukminim2.flixcart.com/image/612/612/xif0q/refrigerator-new/t/x/s/-original-imaghtghjcf67haj.jpeg?q=70',
        detailUrl: 'https://rukminim2.flixcart.com/image/416/416/xif0q/refrigerator-new/t/x/s/-original-imaghtghjcf67haj.jpeg?q=70',
        title: {
            shortTitle: 'Refrigerator',
            longTitle:  ' LG 242 L Frost Free Double Door 3 Star Refrigerator with Smart Inverter  (Shiny Steel, GL-I292RPZX) ',

            
        },
        price: {
            mrp:37099,
            cost: 9499,
            discount: '32%'
        },
        qty: 1,
        rating: 4.4,
        discount:'Extra ₹500 off' , 
        tagline: 'Hot Deal',
        category: 'appliances',
        subCategory: 'refrigerator'

    },
    { 
        url: 'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/o/t/a/c51-mzb0e6din-poco-original-imagzdzzraqzsrzc.jpeg?q=70',
        detailUrl: 'https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/o/t/a/c51-mzb0e6din-poco-original-imagzdzzraqzsrzc.jpeg?q=70',
        title: {
            shortTitle: 'Mobile ',
            longTitle:  ' LG 242 L Frost Free Double Door 3 Star Refrigerator with Smart Inverter  (Shiny Steel, GL-I292RPZX) ',

            
        },
        price: {
            mrp:9999,
            cost: 6499,
            discount: '35%'
        },
        qty: 1,
        rating: 4.4,
        discount:'Extra ₹3500 off' , 
        tagline: 'Trending',
        category: 'mobile',
        subCategory: 'mobile'

    },
    { 
        url: 'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/u/c/u/-original-imagnanh2yvpc4zx.jpeg?q=70',
        detailUrl: 'https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/u/c/u/-original-imagnanh2yvpc4zx.jpeg?q=70',
        title: {
            shortTitle: 'Mobile ',
            longTitle:  'Infinix SMART 7 (Azure Blue, 64 GB)  (4 GB RAM)',

            
        },
        price: {
            mrp:9999,
            cost: 6999,
            discount: '30%'
        },
        qty: 1,
        rating: 4.1,
        discount:'Extra ₹3000 off' , 
        tagline: 'Trending',
        category: 'mobile',
        subCategory: 'mobile'

    },
    { 
        url: 'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/4/h/e/-original-imagzjhwmsamexfk.jpeg?q=70',
        detailUrl: 'https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/4/h/e/-original-imagzjhwmsamexfk.jpeg?q=70',
        title: {
            shortTitle: 'Mobile ',
            longTitle:  'vivo T2x 5G (Glimmer Black, 128 GB)  (6 GB RAM) ',

            
        },
        price: {
            mrp:18999,
            cost: 13999,
            discount: '30%'
        },
        qty: 1,
        rating: 4.2,
        discount:'+ ₹49 Secured Packaging Fee' , 
        tagline: 'Trending',
        category: 'mobile',
        subCategory:'mobile'

    },
    { 
        url: 'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/t/6/g/-original-imagh29eknx3cavh.jpeg?q=70',
        detailUrl: 'https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/t/6/g/-original-imagh29eknx3cavh.jpeg?q=70',
        title: {
            shortTitle: 'Mobile ',
            longTitle:  'MOTOROLA G62 5G (Frosted Blue, 128 GB)  (6 GB RAM)   ',

            
        },
        price: {
            mrp:21999,
            cost: 14999,
            discount: '31%'
        },
        qty: 1,
        rating: 4.1,
        discount:'+ ₹49 Secured Packaging Fee' , 
        tagline: 'Trending',
        category: 'mobile',
        subCategory: 'mobile'

    },
    { 
        url: 'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/a/6/f/-original-imagnb6nvnqz7hqq.jpeg?q=70',
        detailUrl: 'https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/a/6/f/-original-imagnb6nvnqz7hqq.jpeg?q=70',
        title: {
            shortTitle: 'Mobile ',
            longTitle:  'POCO C55 (Forest Green, 128 GB)  (6 GB RAM) ',

            
        },
        price: {
            mrp:13999,
            cost: 8999,
            discount: '35%'
        },
        qty: 1,
        rating: 4.1,
        discount:'+ ₹49 Secured Packaging Fee' , 
        tagline: 'Trending',
        category: 'mobile',
        subCategory: 'mobile'

    },
    { 
        url: 'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/e/6/d/galaxy-m14-5g-sm-m146b-samsung-original-imagzvnkybtue5da.jpeg?q=70',
        detailUrl: 'https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/e/6/d/galaxy-m14-5g-sm-m146b-samsung-original-imagzvnkybtue5da.jpeg?q=70',
        title: {
            shortTitle: 'Mobile ',
            longTitle:  'SAMSUNG Galaxy M14 5G (Smoky Teal, 128 GB)  (6 GB RAM)',

            
        },
        price: {
            mrp:18999,
            cost: 14935,
            discount: '21%'
        },
        qty: 1,
        rating: 4.1,
        discount:'Extra ₹3564 off' , 
        tagline: 'Hot Deal',
        category: 'mobile',
        subCategory: 'mobile'

    },
    { 
        url: 'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/a/i/v/-original-imagfhu6bdzhnmkz.jpeg?q=70',
        detailUrl: 'https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/a/i/v/-original-imagfhu6bdzhnmkz.jpeg?q=70',
        title: {
            shortTitle: 'Mobile ',
            longTitle:  'SAMSUNG Galaxy F13 (Nightsky Green, 64 GB)  (4 GB RAM)#JustHere ',

            
        },
        price: {
            mrp:14999,
            cost: 10999,
            discount: '26%'
        },
        qty: 1,
        rating: 4.3,
        discount:'Extra ₹4000 off' , 
        tagline: 'Hot Deal',
        category: 'mobile',
        subCategory: 'mobile'
    },
    {
    url: 'https://rukminim2.flixcart.com/image/612/612/xif0q/watch/t/z/9/1-dw-01-vokan-men-women-original-imagmxqy4ytsmwcg.jpeg?q=70', 
    detailUrl: 'https://rukminim1.flixcart.com/image/416/416/kl6wx3k0/sandwich-maker/8/r/d/sandwich-01-flipkart-smartbuy-original-imagydds4zthxt8z.jpeg?q=70',
    title: {
        shortTitle: 'Digital Watch',
        longTitle: 'Digital Watch - For Men & Women DW-01'
    },
    price: {
        mrp: 1199,
        cost: 105,
        discount: '91%'
    },
    qty: 1,
    discount: '91% off', 
    tagline: 'Deal of the day',
    category: 'watch',
    subCategory: 'watch'
},
{
    url: 'https://rukminim2.flixcart.com/image/612/612/kdoup3k0-0/watch/a/p/q/hm-3172-hmte-original-imafujqtxh8q33yd.jpeg?q=70', 
    detailUrl: 'https://rukminim2.flixcart.com/image/832/832/kdoup3k0-0/watch/a/p/q/hm-3172-hmte-original-imafujqtxh8q33yd.jpeg?q=70',
    title: {
        shortTitle: 'Analog Watch',
        longTitle: 'Day&Date Series Analog Watch - For Boys HM-3172'
    }, 
    price: {
        mrp: 999,
        cost: 297,
        discount: '70%'
    },
    qty: 1,
    discount: '70% Off', 
    tagline: 'Deal of the Day',
    category: 'watch',
    rating: '3.2',
    subCategory: 'watch'
},
{
    url: 'https://rukminim2.flixcart.com/image/612/612/xif0q/watch/p/t/n/1-wt006-sms-india-men-women-original-imags9qycrg85cdw.jpeg?q=70', 
    detailUrl: 'https://rukminim2.flixcart.com/image/832/832/xif0q/watch/p/t/n/1-wt006-sms-india-men-women-original-imags9qycrg85cdw.jpeg?q=70',
    title: {
        shortTitle: 'Smart Watch',
        longTitle: 'A8 Ultra Hybrid Smartwatch Watch - For Men & Women WT006'
    }, 
    price: {
        mrp: 24999,
        cost: 2499,
        discount: '90%'
    },
    qty: 1,
    discount: '90% Off', 
    tagline: 'Deal of the Day',
    category: 'watch',
    rating: '4.2',
    subCategory: 'watch'
},
{
    url: 'https://rukminim2.flixcart.com/image/612/612/l547yq80/makeup-kit/a/7/w/-original-imagfvymgpuchhfa.jpeg?q=70', 
    detailUrl: 'https://rukminim2.flixcart.com/image/416/416/l547yq80/makeup-kit/a/7/w/-original-imagfvymgpuchhfa.jpeg?q=70',
    title: {
        shortTitle: 'BLUE HEAVEN Bridal Makeup kit for women',
        longTitle: 'BLUE HEAVEN Bridal Makeup kit for women 55.6g + 51 ml  (Pack of 11)'
    }, 
    price: {
        mrp: 1350,
        cost: 745,
        discount: '44%'
    },
    qty: 1,
    discount: '44% Off', 
    tagline: 'Deal of the Day',
    category: 'cosmetics',
    rating: '4.5',
    subCategory: 'makeupKit'
},
{
    url: 'https://rukminim2.flixcart.com/image/612/612/xif0q/lipstick/t/4/t/non-transfer-waterproof-longlast-sensational-liquid-lipstick-original-imagn68qwhkfxhe2.jpeg?q=70', 
    detailUrl: 'https://rukminim2.flixcart.com/image/416/416/xif0q/lipstick/t/4/t/non-transfer-waterproof-longlast-sensational-liquid-lipstick-original-imagn68qwhkfxhe2.jpeg?q=70',
    title: {
        shortTitle: 'Waterproof Lipstick',
        longTitle: 'tenno NON TRANSFER WATERPROOF LONGLAST SENSATIONAL LIQUID LIPSTICK COMBO PACK OF 4  (multicolor, 16 ml)'
    }, 
    price: {
        mrp: 425,
        cost: 175,
        discount: '58%'
    },
    qty: 1,
    discount: '58% Off', 
    tagline: 'Deal of the Day',
    category: 'cosmetics',
    rating: '4',
    subCategory: 'lipstick'
},
{
    url: 'https://rukminim2.flixcart.com/image/612/612/xif0q/nail-polish/c/w/y/96-bling-nail-paint-colour-mania-set-blue-heaven-original-imaggz2kr2fh3yph.jpeg?q=70', 
    detailUrl: 'https://rukminim2.flixcart.com/image/416/416/xif0q/nail-polish/c/w/y/96-bling-nail-paint-colour-mania-set-blue-heaven-original-imaggz2kr2fh3yph.jpeg?q=70',
    title: {
        shortTitle: 'Nail Paint',
        longTitle: 'BLUE HEAVEN Bling Nail Paint Colour Mania Set MultiColor  (Pack of 12)'
    }, 
    price: {
        mrp: 840,
        cost: 445,
        discount: '47%'
    },
    qty: 1,
    discount: '47% Off', 
    tagline: 'Deal of the Day',
    category: 'cosmetics',
    rating: '4.1',
    subCategory:'nailPaint'
},
{
    url: 'https://rukminim2.flixcart.com/image/312/312/xif0q/microwave-new/y/j/v/-original-imagqkfy6ksrybhg.jpeg?q=70', 
    detailUrl: 'https://rukminim2.flixcart.com/image/416/416/xif0q/microwave-new/y/j/v/-original-imagqkfy6ksrybhg.jpeg?q=70',
    title: {
        shortTitle: 'Microwave Oven',
        longTitle: 'Panasonic 27 L Convection Microwave Oven  (NN-CT645BFDG, Black)'
    }, 
    price: {
        mrp: 16190,
        cost: 11490,
        discount: '29%'
    },
    qty: 1,
    discount: '29% Off', 
    tagline: 'Deal of the Day',
    category: 'electronic',
    rating: '4.4',
    subCategory: 'mircowaveOven'
},
{
    url: 'https://rukminim2.flixcart.com/image/612/612/ktuewsw0/kit/v/t/v/20-kg-wb-sl-home-gym-kit-with-3ft-curl-rod-and-3-ft-straight-rod-original-imag72w3xdav67a3.jpeg?q=70', 
    detailUrl: 'https://rukminim2.flixcart.com/image/416/416/ktuewsw0/kit/v/t/v/20-kg-wb-sl-home-gym-kit-with-3ft-curl-rod-and-3-ft-straight-rod-original-imag72w3xdav67a3.jpeg?q=70',
    title: {
        shortTitle: 'GYM Kit',
        longTitle: 'Pascal 20 KG WB - SL HOME GYM KIT WITH 3FT CURL ROD AND 3 FT STRAIGHT ROD AND ACCESSORIES Gym & Fitness Kit',
    }, 
    price: {
        mrp: 1999,
        cost: 1614,
        discount: '19%'
    },
    qty: 1,
    discount: 'Extra 9% Off', 
    tagline: 'Deal of the Day',
    category: 'gymEssentials',
    rating: '3.9',
    subCategory: 'gymKit'
},
{
        url: 'https://rukminim2.flixcart.com/image/416/416/xif0q/ab-exerciser/d/2/d/toning-tube-with-single-spring-tummy-trimmer-multipurpose-original-imagmdm5tr97ru4f.jpeg?q=70', 
        detailUrl: 'https://rukminim2.flixcart.com/image/416/416/xif0q/ab-exerciser/d/2/d/toning-tube-with-single-spring-tummy-trimmer-multipurpose-original-imagmdm5tr97ru4f.jpeg?q=70',
        title: {
            shortTitle: 'ADONYX Toning Tube ',
            longTitle: 'ADONYX Toning Tube With Single Spring Tummy Trimmer Multipurpose Fitness Equipment Gym & Fitness Kit ',
        }, 
        price: {
            mrp: 799,
            cost: 342,
            discount: '57%'
        },
        qty: 1,
        discount: 'Extra 5% Off', 
        tagline: 'Hot Deal',
        category: 'gymEssentials',
        rating: '4.3',
        subCategory: 'toningTube'
},
{
        url: 'https://rukminim2.flixcart.com/image/612/612/xif0q/fitness-grip/b/b/f/combo-finger-exerciser-hand-grip-exerciser-for-muscle-buildind-original-imagrzyh7f3xvufb.jpeg?q=70', 
        detailUrl: 'https://rukminim2.flixcart.com/image/416/416/xif0q/fitness-grip/b/b/f/combo-finger-exerciser-hand-grip-exerciser-for-muscle-buildind-original-imagrzyh7f3xvufb.jpeg?q=70',
        title: {
            shortTitle: 'Oddish Finger Stretcher ',
            longTitle: 'Oddish Finger Stretcher, Finger And Hand Gripper 10 TO 40Kg Gym & Fitness Kit ',
        }, 
        price: {
            mrp: 1399,
            cost: 299,
            discount: '78%'
        },
        qty: 1,
        discount: 'Extra 5% Off', 
        tagline: 'Hot Deal',
        category: 'gymEssentials',
        rating: '4.3',
        subCategory: 'fingerStrecher'
},
{
        url: 'https://rukminim2.flixcart.com/image/612/612/xif0q/kit/s/s/c/toning-tube-tummy-trimmer-pushup-bar-and-ab-roller-hand-grip-original-imagp3e2z632hfya.jpeg?q=70', 
        detailUrl: 'https://rukminim2.flixcart.com/image/416/416/xif0q/kit/s/s/c/toning-tube-tummy-trimmer-pushup-bar-and-ab-roller-hand-grip-original-imagp3e2z632hfya.jpeg?q=70',
        title: {
            shortTitle: 'Fitness Kit Gym ',
            longTitle: 'FITGENIX Toning Tube,Tummy Trimmer ,Pushup bar And Ab Roller,Hand Grip Grey Fitness Kit Gym & Fitness Kit',
        }, 
        price: {
            mrp: 2222,
            cost: 747,
            discount: '66%'
        },
        qty: 1,
        discount: 'Extra 5% Off', 
        tagline: 'Trending',
        category: 'gymEssentials',
        rating: '3.7',
        subCategory: 'fitnessGymKit'
},

{
        url: 'https://rukminim2.flixcart.com/image/612/612/xif0q/kit/7/v/e/hand-gripper-for-men-women-for-gym-workout-hand-exercise-original-imagnzaeyjrgqggg.jpeg?q=70', 
        detailUrl: 'https://rukminim2.flixcart.com/image/416/416/xif0q/kit/7/v/e/hand-gripper-for-men-women-for-gym-workout-hand-exercise-original-imagnzaeyjrgqggg.jpeg?q=70',
        title: {
            shortTitle: 'HEAD Hand Gripper  ',
            longTitle: 'HEAD Hand Gripper for Men & Women for Gym Workout Hand Exercise Equipment Gym & Fitness Kit',
        }, 
        price: {
            mrp: 499,
            cost: 378,
            discount: '24%'
        },
        qty: 1,
        discount: 'Extra 2% Off', 
        tagline: 'Trending',
        category: 'gymEssentials',
        rating: '4.1',
        subCategory: 'handGripper'
    
},

{
        url: 'https://rukminim2.flixcart.com/image/612/612/jxp08sw0/bar/g/t/k/wall-mounted-pull-up-bar-chin-up-bar-for-home-wall-in-black-original-imafg2ajhwaxvyzv.jpeg?q=70', 
        detailUrl: 'https://rukminim2.flixcart.com/image/416/416/jxp08sw0/bar/g/t/k/wall-mounted-pull-up-bar-chin-up-bar-for-home-wall-in-black-original-imafg2ajhwaxvyzv.jpeg?q=70',
        title: {
            shortTitle: 'SSI Wall Mounted Pull Up Bar',
          
            longTitle: 'SSI Wall Mounted Pull Up Bar /Chin Up Bar for home wall in black colour Pull-up Bar  (Black)',
        }, 
        price: {
            mrp: 1899,
            cost: 947,
            discount: '50%'
        },
        qty: 1,
        discount: 'Extra 2% Off', 
        tagline: 'Trending',
        category: 'gymEssentials',
        rating: '4.1',
        subCategory: 'pullUp =Bar'
},

{
        url: 'https://rukminim2.flixcart.com/image/612/612/xif0q/shopsy-ab-exerciser/x/4/7/tummy-trimmer-with-resistance-tube-band-exercise-equipment-for-original-imaghjat7yrpbmpe.jpeg?q=70', 
        detailUrl: 'https://rukminim2.flixcart.com/image/416/416/xif0q/shopsy-ab-exerciser/x/4/7/tummy-trimmer-with-resistance-tube-band-exercise-equipment-for-original-imaghjat7yrpbmpe.jpeg?q=70',
        title: {
            shortTitle: 'Top Quality Store Tummy Trimmer',
          
            longTitle: 'Top Quality Store Tummy Trimmer + Exercise Resistance Toning Stretchable Tube Full Body Workout Gym & Fitness Kit',
        }, 
        price: {
            mrp: 1195,
            cost: 365,
            discount: '69%'
        },
        qty: 1,
        discount: 'Extra 2% Off', 
        tagline: 'Trending',
        category: 'gymEssentials',
        rating: '4.1',
        subCategory: 'tummyTrimmer'
},
{
        url: 'https://rukminim2.flixcart.com/image/612/612/xif0q/kit/k/y/7/back-stretcher-spine-back-pain-relief-products-with-magnetic-original-imagj64kg5dqhpfe.jpeg?q=70', 
        detailUrl: 'https://rukminim2.flixcart.com/image/416/416/xif0q/kit/k/y/7/back-stretcher-spine-back-pain-relief-products-with-magnetic-original-imagj64kg5dqhpfe.jpeg?q=70',
        title: {
            shortTitle: 'Manogyam Back Stretcher',
            longTitle: 'Manogyam Back Stretcher,Spine Back Pain Relief Products with Magnetic Acupressure Points Gym & Fitness Kit',
        }, 
        price: {
            mrp: 799,
            cost: 269,
            discount: '66%'
        },
        qty: 1,
        discount: 'Extra 2% Off', 
        tagline: 'Hot Deal',
        category: 'gymEssentials',
        rating: '4.3',
        subCategory: 'backStrecher'
},
{
        url: 'https://rukminim2.flixcart.com/image/612/612/xif0q/kit/f/v/v/pvc-home-gym-set-8kg-2kg-4pcs-plate-with-dumbbell-rod-gym-original-imagg6np4hd83fpd.jpeg?q=70', 
        detailUrl: 'https://rukminim2.flixcart.com/image/416/416/xif0q/kit/f/v/v/pvc-home-gym-set-8kg-2kg-4pcs-plate-with-dumbbell-rod-gym-original-imagg6np4hd83fpd.jpeg?q=70',
        title: {
            shortTitle: 'Dumbbell Rod Kit',
            longTitle: 'Krin Fitness PVC Home Gym Set (2.5Kg*4) 10kg Plate with Dumbbell Rod Kit Gym & Fitness Kit',
        }, 
        price: {
            mrp: 1499,
            cost: 499,
            discount: '66%'
        },
        qty: 1,
        discount: 'Extra 2% Off', 
        tagline: 'Hot Deal',
        category: 'gymEssentials',
        rating: '4.3',
        subCategory: 'dumbbellRodKit'
},
{
        url: 'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/h/h/d/-original-imags487gaqqhcea.jpeg?q=70', 
        detailUrl: 'https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/h/h/d/-original-imags487gaqqhcea.jpeg?q=70',
        title: {
            shortTitle: 'Mobile',
            longTitle: 'realme C53 (Champion Gold, 64 GB)  (6 GB RAM)#JustHere',
        }, 
        price: {
            mrp: 12999,
            cost: 10999,
            discount: '15%'
        },
        qty: 1,
        discount: 'Extra 6% Off', 
        tagline: 'Deal of the Day',
        category: 'mobile',
        rating: '4.5',
        subCategory: 'mobile'
},
{
        url: 'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/8/d/b/-original-imagp9s9wfzp8ghf.jpeg?q=70', 
        detailUrl: 'https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/8/d/b/-original-imagp9s9wfzp8ghf.jpeg?q=70',
        title: {
            shortTitle: 'Mobile',
            longTitle: 'realme C55 (Rainforest, 128 GB)  (8 GB RAM)',
        }, 
        price: {
            mrp: 15999,
            cost: 13999,
            discount: '15%'
        },
        qty: 1,
        discount: 'Extra 2000 Off', 
        tagline: 'Deal of the Day',
        category: 'mobile',
        rating: '4.4',
        subCategory: 'mobile'
},
{
        url: 'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/e/z/d/-original-imagrn6d7ggk4wjp.jpeg?q=70', 
        detailUrl: 'https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/e/z/d/-original-imagrn6d7ggk4wjp.jpeg?q=70',
        title: {
            shortTitle: 'Mobile',
            longTitle: 'OPPO Reno10 5G (Silvery Grey, 256 GB)  (8 GB RAM)#JustHere',
        }, 
        price: {
            mrp: 38999,
            cost: 32999,
            discount: '15%'
        },
        qty: 1,
        discount: 'Extra 6000 Off', 
        tagline: 'Deal of the Day',
        category: 'mobile',
        rating: '4.4',
        subCategory: 'mobile'
},

{
        url: 'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/6/l/2/-original-imagrn6dfyqhz3gg.jpeg?q=70', 
        detailUrl: 'https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/6/l/2/-original-imagrn6dfyqhz3gg.jpeg?q=70',
        title: {
            shortTitle: 'Mobile',
            longTitle: 'OPPO Reno10 5G (Ice Blue, 256 GB)  (8 GB RAM) ',
        }, 
        price: {
            mrp: 38999,
            cost: 32999,
            discount: '15%'
        },
        qty: 1,
        discount: 'Extra 6000 Off', 
        tagline: 'Deal of the Day',
        category: 'mobile',
        rating: '4.3',
        subCategory: 'mobile'
    },
{
        url: 'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/9/e/e/-original-imaghx9q5rvcdghy.jpeg?q=70', 
        detailUrl: 'https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/9/e/e/-original-imaghx9q5rvcdghy.jpeg?q=70',
        title: {
            shortTitle: 'APPLE iPhone',
            longTitle: 'APPLE iPhone 14 (Midnight, 128 GB)',
        }, 
        price: {
            mrp: 79900,
            cost: 68999,
            discount: '13%'
        },
        qty: 1,
        discount: 'Extra 10901 Off', 
        tagline: 'Hot Deal',
        category: 'mobile',
        rating: '4.6',
        subCategory: 'mobile'
},

{       
        url: 'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/3/5/l/-original-imaghx9qmgqsk9s4.jpeg?q=70', 
        detailUrl: 'https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/3/5/l/-original-imaghx9qmgqsk9s4.jpeg?q=70',
        title: {
            shortTitle: 'APPLE iPhone',
            longTitle: 'APPLE iPhone 14 (Blue, 128 GB)  ',
        }, 
        price: {
            mrp: 79900,
            cost: 68999,
            discount: '13%'
        },
        qty: 1,
        discount: 'Extra 10901 Off', 
        tagline: 'Hot Deal',
        category: 'mobile',
        rating: '4.6',
        subCategory: 'mobile'
},
{
    url: 'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/3/5/l/-original-imaghx9qmgqsk9s4.jpeg?q=70', 
    detailUrl: 'https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/3/5/l/-original-imaghx9qmgqsk9s4.jpeg?q=70',
    title: {
        shortTitle: 'APPLE iPhone',
        longTitle: 'APPLE iPhone 14 (Blue, 128 GB)  ',
    }, 
    price: {
        mrp: 79900,
        cost: 68999,
        discount: '13%'
    },
    qty: 1,
    discount: 'Extra 10901 Off', 
    subCategory: 'mobile',
    tagline: 'Hot Deal',
    category: 'mobile',
    rating: '4.6'
},

{
    url: 'https://rukminim2.flixcart.com/image/312/312/ktketu80/mobile/6/n/d/iphone-13-mlpg3hn-a-apple-original-imag6vpyghayhhrh.jpeg?q=70', 
    detailUrl: 'https://rukminim2.flixcart.com/image/416/416/ktketu80/mobile/6/n/d/iphone-13-mlpg3hn-a-apple-original-imag6vpyghayhhrh.jpeg?q=70',
    title: {
        shortTitle: 'APPLE iPhone',
        longTitle: 'APPLE iPhone 13 (Starlight, 128 GB)',
    }, 
    price: {
        mrp: 69900,
        cost: 59999,
        discount: '15%'
    },
    qty: 1,
    discount: 'Extra 9901 Off', 
    subCategory: 'iphone',
    tagline: 'Hot Deal',
    category: 'mobile',
    rating: '4.6'
},
{
url: "https://rukminim2.flixcart.com/image/612/612/xif0q/bat/p/g/w/400-junior-cricket-bat-size-3-for-age-group-8-years-3-junior-3-original-imagp8ugqssdmruc.jpeg?q=70",
detailUrl: "https://rukminim2.flixcart.com/image/416/416/xif0q/bat/p/g/w/400-junior-cricket-bat-size-3-for-age-group-8-years-3-junior-3-original-imagp8ugqssdmruc.jpeg?q=70",
title: {
shortTitle: "Lyca Junior Cricket Bat",
longTitle:
"LYCAN Junior Cricket Bat Size 3 For Age Group 8 Years PVC/Plastic Cricket Bat  (400 g)",
},
price: {
mrp: 259,
cost: 222,
discount: "14%",
},
qty: 1,
discount: "Extra ₹37 off",
subCategory: 'cricketbat',
tagline: "Deal of the Day",
category: "sports" 
},

{
url: "https://rukminim2.flixcart.com/image/612/612/jvqzo280/bat/q/b/a/0-900-poplar-willow-cricket-bat-no-6-6-1-ceat-original-imafggjgczcwszky.jpeg?q=70",
detailUrl: "https://rukminim2.flixcart.com/image/416/416/jvqzo280/bat/q/b/a/0-900-poplar-willow-cricket-bat-no-6-6-1-ceat-original-imafggjgczcwszky.jpeg?q=70",
title: {
shortTitle: "CEAT Popular Willow Cricket Bat",
longTitle:
"CEAT POPLAR WILLOW CRICKET BAT (No- 6) Poplar Willow Cricket Bat  (0.900 g)",
},
price: {
mrp: 1199,
cost: 349,
discount: "70%",
},
qty: 1,
discount: "Extra ₹500 off",
subCategory: 'cricketbat',
tagline: "Best Deals",
category: "sports" 
},

{
url: "https://rukminim2.flixcart.com/image/612/612/jlgwmfk0/ball/f/q/7/150-160-standard-sports-leather-club-cricket-ball-white-2part-7-original-imaf8kedvcapgsph.jpeg?q=70",
detailUrl: "https://rukminim2.flixcart.com/image/416/416/jlgwmfk0/ball/f/q/7/150-160-standard-sports-leather-club-cricket-ball-white-2part-7-original-imaf8kedvcapgsph.jpeg?q=70",
title: {
shortTitle: "DIABLO Sports Leather Club Cricket Ball",
longTitle:
"DIABLO Sports Leather Club Cricket Ball White (4Part) Cricket Leather Ball  (Pack of 1, White)",
},
price: {
mrp: 579,
cost: 199,
discount: "65%",
},
qty: 1,
discount: "Extra 14% off",
subCategory: 'cricketball',
tagline: "Trending",
category: "sports" 
},
{
url: "https://rukminim2.flixcart.com/image/612/612/klb78nk0/wicket/j/6/c/natural-brown-set-of-6-stumps-with-bails-brown-akki-sports-original-imagygr5teveyx3g.jpeg?q=70",
detailUrl: "https://rukminim2.flixcart.com/image/416/416/klb78nk0/wicket/j/6/c/natural-brown-set-of-6-stumps-with-bails-brown-akki-sports-original-imagygr5teveyx3g.jpeg?q=70",
title: {
shortTitle: "NSI Premium Stumps",
longTitle:
"NSI Premium Diamond natural brown set of 6 stumps with 4 bails (Brown)",
},
price: {
mrp: 1439,
cost: 365,
discount: "74%",
},
qty: 1,
discount: "Extra 5% off",
subCategory: 'stumps',
tagline: "Deal of the Day",
category: "sports" 
}, 
{
url: "https://rukminim2.flixcart.com/image/612/612/ksru0sw0/racquet/y/s/2/g4-3-25-inches-strung-astrox-lite-27i-astrox-light-27i-badminton-original-imag69gb8emf2uhf.jpeg?q=70",
detailUrl: "https://rukminim2.flixcart.com/image/416/416/ksru0sw0/racquet/y/s/2/g4-3-25-inches-strung-astrox-lite-27i-astrox-light-27i-badminton-original-imag69gb8emf2uhf.jpeg?q=70",
title: {
shortTitle: "Yonex Badminton Racquet",
longTitle:
"Yonex Astrox Lite 27i Badminton Racquet (G4, 77 Grams, 30 lbs Tension)  (Pack of: 1, 77 g)",
},
price: {
mrp: 3090,
cost: 1999,
discount: "35%",
},
qty: 1,
discount: "Extra 12% off",
subCategory: 'badmintonracquet',
tagline: "Best Deals",
category: "sports" 
},
{
url: "https://rukminim2.flixcart.com/image/612/612/kdkkdjk0/shuttle/u/r/3/mavis-350-green-cap-6-75-nylon-yonex-slow-original-imafug3v2vvydhbd.jpeg?q=70",
detailUrl: "https://rukminim2.flixcart.com/image/416/416/kdkkdjk0/shuttle/u/r/3/mavis-350-green-cap-6-75-nylon-yonex-slow-original-imafug3vnxye6skh.jpeg?q=70",
title: {
shortTitle: "Yonex Nylon Shuttle",
longTitle:
"YONEX MAVIS 350 Nylon Shuttle - Yellow  (Slow, 75, Pack of 6)",
},
price: {
mrp: 1265,
cost: 1099,
discount: "13%",
},
qty: 1,
discount: "Extra 5% off",
subCategory: 'shuttle',
tagline: "Trending",
category: "sports" 
},
{
url: "https://rukminim2.flixcart.com/image/612/612/xif0q/ball/y/b/j/-original-imagjpzyvhqhg9xs.jpeg?q=70",
detailUrl: "https://rukminim2.flixcart.com/image/416/416/xif0q/ball/y/b/j/-original-imagjpzyvhqhg9xs.jpeg?q=70",
title: {
shortTitle: "Adidas Football",
longTitle:
"ADIDAS TIRO LGE TB Football - Size: 5  (Pack of 1, White)",
},
price: {
mrp: 2999,
cost: 1959,
discount: "34%",
},
qty: 1,
discount: "Extra 5% off",
subCategory: 'football',
tagline: "Deal of the day",
category: "sports" 
},
{
url: "https://rukminim2.flixcart.com/image/612/612/xif0q/ball/y/b/j/-original-imagjpzyvhqhg9xs.jpeg?q=70",
detailUrl: "https://rukminim2.flixcart.com/image/416/416/xif0q/ball/y/b/j/-original-imagjpzyvhqhg9xs.jpeg?q=70",
title: {
shortTitle: "Adidas Football",
longTitle:
"ADIDAS TIRO LGE TB Football - Size: 5  (Pack of 1, White)",
},
price: {
mrp: 2999,
cost: 1959,
discount: "34%",
},
qty: 1,
discount: "Extra 5% off",
subCategory: 'football',
tagline: "Best Deals",
category: "sports" 
}, 
{
url: "https://rukminim2.flixcart.com/image/612/612/xif0q/ball/r/u/s/400-adidas-world-cup-football-with-pump-5-15-2-1-football-saanvi-original-imagnc4nyzgxjnvj.jpeg?q=70",
detailUrl: "https://rukminim2.flixcart.com/image/416/416/xif0q/ball/r/u/s/400-adidas-world-cup-football-with-pump-5-15-2-1-football-saanvi-original-imagnc4nyzgxjnvj.jpeg?q=70",
title: {
shortTitle: "Dinetic Adidas World Cup Football",
longTitle:
"Dinetic ADIDAS WORLD CUP FOOTBALL WITH PUMP Football - Size: 5  (Pack of 2)",
},
price: {
mrp: 1999,
cost: 999,
discount: "50%",
},
qty: 1,
discount: "Extra 5% off",
subCategory: 'football',
tagline: "Trending",
category: "sports" 
},
{
url: "https://rukminim2.flixcart.com/image/612/612/kg9qbgw0/sport-glove/a/4/t/left-right-football-soccer-goalie-profesional-german-latex-original-imafwgy3rhyywr6r.jpeg?q=70",
detailUrl: "https://rukminim2.flixcart.com/image/416/416/kg9qbgw0/sport-glove/a/4/t/left-right-football-soccer-goalie-profesional-german-latex-original-imafwgy3rhyywr6r.jpeg?q=70",
title: {
shortTitle: "KOBO Football Gloves",
longTitle:
"KOBO 6.5 Football / Soccer Goalie Profesional German Latex Goalkeeping Gloves  (Red, Black)",
},
price: {
mrp: 3900,
cost: 1950,
discount: "50%",
},
qty: 1,
discount: "Extra 5% off",
subCategory: 'gloves',
tagline: "Deal of the Day",
category: "sports" 
}, 
{
url: "https://rukminim2.flixcart.com/image/612/612/klqx30w0/skate/b/r/q/6-9-high-quality-skating-in-line-shoe-have-different-size-and-original-imagytf9k5zuksdv.jpeg?q=70",
detailUrl: "https://rukminim2.flixcart.com/image/416/416/klqx30w0/skate/b/r/q/6-9-high-quality-skating-in-line-shoe-have-different-size-and-original-imagytf9k5zuksdv.jpeg?q=70",
title: {
shortTitle: "J K INTERNATIONAL High quality Skating in-line Shoe",
longTitle:
"J K INTERNATIONAL High quality Skating in-line Shoe have different size and with PU LED wheel In-line Skates - (Blue) In-line Skates - Size 6-9 UK  (Blue)",
},
price: {
mrp: 2999,
cost: 1299,
discount: "56%",
},
qty: 1,
discount: "Extra 21% off",
subCategory: 'skatingshoe',
tagline: "Best Deals",
category: "sports" 
}, 
{
url: "https://rukminim2.flixcart.com/image/612/612/kbi9h8w0/skateboard/s/h/y/big-bang-7-adrenex-by-flipkart-27-original-imafsugkbugmxxrd.jpeg?q=70",
detailUrl: "https://rukminim2.flixcart.com/image/416/416/kbi9h8w0/skateboard/s/h/y/big-bang-7-adrenex-by-flipkart-27-original-imafsugkbugmxxrd.jpeg?q=70",
title: {
shortTitle: "Adrenex Skateboard",
longTitle:
"Big Bang 6 inch x 26.5 inch Skateboard  (Multicolor, Pack of 1)",
},
price: {
mrp: 1999,
cost: 1149,
discount: "42%",
},
qty: 1,
discount: "Extra 5% off",
subCategory: 'skateboard',
tagline: "Trending",
category: "sports" 
},
{
url: "https://rukminim2.flixcart.com/image/612/612/l3929ow0/kit/g/s/l/40kg-gym-kit3ft-straight-rod-3ft-curl-rod-one-pair-dumbbell-rods-original-imagees7zqjka7f7.jpeg?q=70",
detailUrl: "https://rukminim2.flixcart.com/image/416/416/l3929ow0/kit/g/s/l/40kg-gym-kit3ft-straight-rod-3ft-curl-rod-one-pair-dumbbell-rods-original-imagees7zqjka7f7.jpeg?q=70",
title: {
shortTitle: "JMB Combo Home Gym Kit",
longTitle:
"JMB 30KG PVC COMBO HOME GYM KIT FOR MEN AND WOMEN GYM Equipment Home Gym Combo Adjustable Dumbbell  (30 kg)",
},
price: {
mrp: 6999,
cost: 1699,
discount: "75%",
},
qty: 1,
discount: "Extra 4% off",
subCategory: 'gymkit',
tagline: "Deal of the Day",
category: "sports" 
},
{
url: "https://rukminim2.flixcart.com/image/612/612/l3nco7k0/dumbbell/a/k/a/fitness-hex-shape-pvc-dumbbell-set-5kg-2pcs-10kg-best-for-home-original-imageprkzkvygu6b.jpeg?q=70",
detailUrl: "https://rukminim2.flixcart.com/image/416/416/l3nco7k0/dumbbell/a/k/a/fitness-hex-shape-pvc-dumbbell-set-5kg-2pcs-10kg-best-for-home-original-imageprkzkvygu6b.jpeg?q=70",
title: {
shortTitle: "PVC Dumbbell Set",
longTitle:
"AMAN FIT Super Quality PVC Dumbbell Set (5 KG X 2 Pcs) Hex Dumbbell Set Fixed Weight Dumbbell  (5 kg)",
},
price: {
mrp: 2999,
cost: 379,
discount: "87%",
},
qty: 1,
discount: "Extra 2% off",
subCategory: 'dumbbellset',
tagline: "Best Deals",
category: "sports" 
},
{
url: "https://rukminim2.flixcart.com/image/612/612/xif0q/sport-mat/m/t/o/yoga-mat-for-yoga-flooring-exercise-for-youthblack-blue-purple-4-original-imagscwggrykwytf.jpeg?q=70",
detailUrl: "https://rukminim2.flixcart.com/image/416/416/xif0q/sport-mat/m/t/o/yoga-mat-for-yoga-flooring-exercise-for-youthblack-blue-purple-4-original-imagscwggrykwytf.jpeg?q=70",
title: {
shortTitle: "Yoga Mat",
longTitle:
"looka Yoga Mat for Yoga & Flooring Exercise for YouthBlack-Blue-Purple 4 mm Yoga Mat",
},
price: {
mrp: 2499,
cost: 1499,
discount: "40%",
},
qty: 1,
discount: "Extra 5% off",
subCategory: 'yogamat',
tagline: "Trending",
category: "sports" 
},
{
url: "https://rukminim2.flixcart.com/image/612/612/xif0q/sport-glove/f/h/k/left-right-s-active-f8-brnwfba00213-80-17-gym-fitness-gloves-original-imagnhhzgsstjsrw.jpeg?q=70",
detailUrl: "https://rukminim2.flixcart.com/image/416/416/xif0q/sport-glove/f/h/k/left-right-s-active-f8-brnwfba00213-80-17-gym-fitness-gloves-original-imagnhhzgsstjsrw.jpeg?q=70",
title: {
shortTitle: "Fitness Gloves",
longTitle:
"BURNLAB Active F8 Gym & Fitness Gloves  (Red)",
},
price: {
mrp: 1500,
cost: 1750,
discount: "50%",
},
qty: 1,
discount: "Extra 7% off",
subCategory: 'fitnessgloves',
tagline: "Deal of the Day",
category: "sports" 
},
{
url: "https://rukminim2.flixcart.com/image/612/612/xif0q/sport-glove/l/l/m/both-m-mens-gym-gloves-with-12-inch-wrist-support-and-anti-slip-original-imaggxfcbffcnghb.jpeg?q=70",
detailUrl: "https://rukminim2.flixcart.com/image/416/416/xif0q/sport-glove/l/l/m/both-m-mens-gym-gloves-with-12-inch-wrist-support-and-anti-slip-original-imaggxfcbffcnghb.jpeg?q=70",
title: {
shortTitle: "Mens Gym Gloves",
longTitle:
"Xfinity Fitness Mens Gym Gloves with 12 inch Wrist Support and Anti Slip Gym & Fitness Gloves  (Orange, Black)",
},
price: {
mrp: 999,
cost: 546,
discount: "45%",
},
qty: 1,
discount: "Extra 6% off",
subCategory: 'gymgloves',
tagline: "Best Deals",
category: "sports" 
},
{
url: "https://rukminim2.flixcart.com/image/612/612/xif0q/fitness-grip/b/b/f/combo-finger-exerciser-hand-grip-exerciser-for-muscle-buildind-original-imagrzyh7f3xvufb.jpeg?q=70",
detailUrl: "https://rukminim2.flixcart.com/image/416/416/xif0q/fitness-grip/b/b/f/combo-finger-exerciser-hand-grip-exerciser-for-muscle-buildind-original-imagrzyh7f3xvufb.jpeg?q=70",
title: {
shortTitle: "Hand Gripper",
longTitle:
"Oddish Finger Stretcher, Finger And Hand Gripper 10 TO 40Kg Gym & Fitness Kit",
},
price: {
mrp: 1399,
cost: 299,
discount: "78%",
},
qty: 1,
discount: "Extra 3% off",
subCategory: 'handgripper',
tagline: "Best Deals",
category: "sports" 
},
{
url: "https://rukminim2.flixcart.com/image/612/612/xif0q/kit/h/4/o/multi-functional-push-up-board-mfpub071119-31-jaypano-4-original-imaghn4d7vdfyyuj.jpeg?q=70",
detailUrl: "https://rukminim2.flixcart.com/image/416/416/xif0q/kit/h/4/o/multi-functional-push-up-board-mfpub071119-31-jaypano-4-original-imaghn4d7vdfyyuj.jpeg?q=70",
title: {
shortTitle: "Multi Functional Push Up Board",
longTitle:
"JAYPANO MULTI FUNCTIONAL PUSH UP BOARD Gym & Fitness Kit",
},
price: {
mrp: 1018,
cost: 358,
discount: "64%",
},
qty: 1,
discount: "Extra 5% off",
subCategory: 'pushupboard',
tagline: "Best Deals",
category: "sports" 
},
{
url: "https://rukminim2.flixcart.com/image/612/612/k5zn9u80/support/h/s/k/na-4-inch-wide-weight-lifting-gym-belt-back-support-for-men-and-original-imafzk3zvdj9nf8h.jpeg?q=70",
detailUrl: "https://rukminim2.flixcart.com/image/416/416/kabe9ow0/kit/s/e/g/best-combo-fitness-gym-belt-m-size-30-34-boxing-hand-wrap-black-original-imafrx6e7dkrvguh.jpeg?q=70",
title: {
shortTitle: "Fitness Gym Belt and Boxing Hand Wrap",
longTitle:"VICTORY Best Combo Fitness Gym Belt (M) Size (30-34) & Boxing Hand Wrap Black Fitness Accessory Kit Kit",
},
price: {
mrp: 449,
cost: 349,
discount: "30%",
},
qty: 1,
discount: "Extra 4% off",
subCategory: 'gymbeltandboxinghandwrap',
tagline: "Best Deals",
category: "sports" 
},
{
    url: 'https://rukminim2.flixcart.com/image/612/612/xif0q/bed-mattress/a/d/a/normal-top-queen-8-66-75-smartgrid-orthopedic-75x66-high-density-original-imagpzayes9jz5rh.jpeg?q=70', 
    detailUrl: 'https://rukminim2.flixcart.com/image/416/416/xif0q/bed-mattress/a/d/a/normal-top-queen-8-66-75-smartgrid-orthopedic-75x66-high-density-original-imagpzayes9jz5rh.jpeg?q=70',
    title: {
        shortTitle: 'Foam Mattress',
        longTitle: 'The Sleep Company SmartGRID Orthopedic - AIHA Certified Medium Firm Feel for Back Pain Relief| 5 inch Single High Density (HD) Foam Mattress  (L x W: 72 inch x 36 inch)    '
    }, 
    price: {
        mrp: 15900,
        cost: 11925,
        discount: '25%'
    },
    qty: 1,
    discount: '25% Off', 
    subCategory: 'foammattress',
    tagline: 'Deal of the Day',
    category: 'furniture',
    rating: '4.2'
},
{
    url: 'https://rukminim2.flixcart.com/image/612/612/xif0q/wardrobe-closet/f/6/5/-original-imagrxnjzwhda9sa.jpeg?q=70', 
    detailUrl: 'https://rukminim2.flixcart.com/image/416/416/xif0q/wardrobe-closet/f/6/5/-original-imagrxnjzwhda9sa.jpeg?q=70',
    title: {
        shortTitle: 'Wardrobe',
        longTitle: 'Flipkart Perfect Homes Julian Engineered Wood 2 Door Wardrobe  (Finish Color - American Espresso, Mirror Included, Knock Down)'
    }, 
    price: {
        mrp: 16999,
        cost: 8098,
        discount: '49%'
    },
    qty: 1,
    discount: '49% Off', 
    subCategory: 'wardrobe',
    tagline: 'Deal of the Day',
    category: 'furniture',
    rating: '4'
},
{
    url: 'https://rukminim2.flixcart.com/image/612/612/xif0q/tv-entertainment-unit/n/n/m/-original-imagrtbh4gh4nudw.jpeg?q=70', 
    detailUrl: 'https://rukminim2.flixcart.com/image/416/416/xif0q/tv-entertainment-unit/n/n/m/-original-imagrtbh4gh4nudw.jpeg?q=70',
    title: {
        shortTitle: 'Homes Phonox Engineered Wood TV Entertainment Unit',
        longTitle: 'Flipkart Perfect Homes Phonox Engineered Wood TV Entertainment Unit  (Finish Color - Chocolate Wenge, Knock Down)'
    }, 
    price: {
        mrp: 11999,
        cost: 4655,
        discount: '61%'
    },
    qty: 1,
    discount: '61% Off',
    subCategory: 'tv', 
    tagline: 'Deal of the Day',
    category: 'furniture',
    rating: '4.1'
},
{
    url: 'https://rukminim2.flixcart.com/image/612/612/xif0q/portable-laptop-table/h/c/n/40-plywood-black-line-laptop-office-study-table-vrinja-28-black-original-imag5qhgehuxfcr4.jpeg?q=70', 
    detailUrl: 'https://rukminim2.flixcart.com/image/416/416/ks3jjbk0/portable-laptop-table/v/s/k/rubber-wood-study-table-for-bed-study-laptop-table-with-original-imag5qhgyz4gkahh.jpeg?q=70',
    title: {
        shortTitle: 'Multi-Purpose Laptop Desk',
        longTitle: 'sarun sales Multi-Purpose Laptop Desk for Study and Reading (black) Wood Portable Laptop Table  (Finish Color - BLACK, Pre Assembled)'
    }, 
    price: {
        mrp: 1288,
        cost: 440,
        discount: '65%'
    },
    qty: 1,
    discount: '65% Off', 
    subCategory: 'laptopdesk',
    tagline: 'Deal of the Day',
    category: 'furniture',
    rating: '4'
},
{
    url: 'https://rukminim2.flixcart.com/image/612/612/kjbr8280-0/shoe-rack/l/j/v/nex-gen-shoe-stand-7-layer-05-cmerchants-original-imafywf8kybsz7th.jpeg?q=70', 
    detailUrl: 'https://rukminim2.flixcart.com/image/416/416/kjbr8280-0/shoe-rack/g/a/j/nex-gen-shoe-stand-7-layer-06-cmerchants-original-imafywf8rscdeam6.jpeg?q=70',
    title: {
        shortTitle: 'Shoe Rack',
        longTitle: 'CMerchants NextGEN Home Creative 7 layer collapsible shoe rack BLACK Metal Collapsible Shoe Stand  (Black, 7 Shelves, DIY(Do-It-Yourself))'
    }, 
    price: {
        mrp: 1999,
        cost: 749,
        discount: '62%'
    },
    qty: 1,
    discount: '62% Off', 
    subCategory: 'shoerack',
    tagline: 'Deal of the Day',
    category: 'furniture',
    rating: '3.9'
},
{
    url: 'https://rukminim2.flixcart.com/image/612/612/xif0q/sofa-bed/8/j/2/-original-imagmszfgqep8tgs.jpeg?q=70', 
    detailUrl: 'https://rukminim2.flixcart.com/image/416/416/xif0q/sofa-bed/8/j/2/-original-imagmszfgqep8tgs.jpeg?q=70',
    title: {
        shortTitle: '4 Seater Wooden Sofa cum Bed',
        longTitle: 'Seventh Heaven Lisbon 4 Seater Wooden Sofa cum Bed, Chenille Molfino Fabric: 3 Years Warranty 4 Seater Double Solid Wood Pull Out Sofa Cum Bed  (Finish Color - Beige Delivery Condition - DIY(Do-It-Yourself))'
    }, 
    price: {
        mrp: 34545,
        cost: 14999,
        discount: '56%'
    },
    qty: 1,
    discount: '56% Off', 
    subCategory: 'sofa',
    tagline: 'Deal of the Day',
    category: 'furniture',
    rating: '4.1'
},
{
    url: 'https://rukminim2.flixcart.com/image/612/612/xif0q/bed/q/e/n/-original-imagrxnj87hqsx25.jpeg?q=70', 
    detailUrl: 'https://rukminim2.flixcart.com/image/416/416/xif0q/bed/q/e/n/-original-imagrxnj87hqsx25.jpeg?q=70',
    title: {
        shortTitle: 'Engineered Wood Single Box Bed',
        longTitle: 'Flipkart Perfect Homes Sonore Engineered Wood Single Box Bed  (Finish Color - Melamine Wenge, Delivery Condition - Knock Down)'
    }, 
    price: {
        mrp: 15499,
        cost: 7599,
        discount: '50%'
    },
    qty: 1,
    discount: '50% Off', 
    subCategory: 'bed',
    tagline: 'Deal of the Day',
    category: 'furniture',
    rating: '4.2'
},
{
    url: 'https://rukminim2.flixcart.com/image/612/612/kyxb9u80/collapsible-wardrobe/o/b/p/pp-plastic-pp-collapsible-wardrobe-1-door-6-shelves-blue-metal-original-imagbft2cuycyyec.jpeg?q=70', 
    detailUrl: 'https://rukminim2.flixcart.com/image/416/416/kyxb9u80/collapsible-wardrobe/o/b/p/pp-plastic-pp-collapsible-wardrobe-1-door-6-shelves-blue-metal-original-imagbft2cuycyyec.jpeg?q=70',
    title: {
        shortTitle: 'Wardrobe',
        longTitle: 'Ryuga PP Collapsible Wardrobe  (Finish Color - Maroon, DIY(Do-It-Yourself))'
    }, 
    price: {
        mrp: 2051,
        cost: 569,
        discount: '72%'
    },
    qty: 1,
    discount: '72% Off', 
    subCategory: 'wardrobe',
    tagline: 'Deal of the Day',
    category: 'furniture',
    rating: '3.4'
},
{
    url: 'https://rukminim2.flixcart.com/image/612/612/xif0q/chimney/a/b/h/1425-2022-100-60-wdat-hac-60-ms-bldc-nero-1425-elica-original-imagmmm6hrschazj.jpeg?q=70', 
    detailUrl: 'https://rukminim2.flixcart.com/image/416/416/xif0q/chimney/a/b/h/1425-2022-100-60-wdat-hac-60-ms-bldc-nero-1425-elica-original-imagmmm6hrschazj.jpeg?q=70',
    title: {
        shortTitle: 'Chimney',
      
        longTitle: 'Elica WDAT HAC 60 MS BLDC NERO Auto Clean Wall Mounted Chimney  (Black 1425 CMH) '
    }, 
    price: {
        mrp: 29990,
        cost: 15990,
        discount: '46%'
    },
    qty: 1,
    discount: 'Extra 2% Off', 
    subCategory: 'chimney',
    tagline: 'Deal of the Day',
    category: 'electronic',
    rating: '4.5'
},
{
    url: 'https://rukminim2.flixcart.com/image/612/612/ku2zjww0/weighing-scale/h/7/b/digital-kitchen-weighing-scale-food-weight-machine-for-health-original-imag7adktwgzaexc.jpeg?q=70', 
    detailUrl: 'https://rukminim2.flixcart.com/image/416/416/ku2zjww0/weighing-scale/h/7/b/digital-kitchen-weighing-scale-food-weight-machine-for-health-original-imag7adktwgzaexc.jpeg?q=70',
    title: {
        shortTitle: 'Weighing Machine',
      
        longTitle: 'Venus Digital Kitchen Weighing Scale & Food Weight Machine for Health, Fitness, Home Baking & Cooking Scale, 2 Year Warranty & Battery Included (With Bowl) Weighing Scale  (Black, White) '
    }, 
    price: {
        mrp: 2999,
        cost: 1599,
        discount: '66%'
    },
    qty: 1,
    discount: 'Extra 5% Off', 
    subCategory: 'weighingmachine',
    tagline: 'Deal of the Day',
    category: 'electronic',
    rating: '4.1'
},
{
    url: 'https://rukminim2.flixcart.com/image/612/612/xif0q/washing-machine-new/g/f/z/-original-imagrmcfjm6qzsvx.jpeg?q=70', 
    detailUrl: 'https://rukminim2.flixcart.com/image/416/416/xif0q/washing-machine-new/g/f/z/-original-imagrmcfjm6qzsvx.jpeg?q=70',
    title: {
        shortTitle: 'Washing Machine',
      
        longTitle: 'Voltas Beko 8 kg with Fast Dry, Double Waterfall, 5 Wing Pulsator, Buzzer Semi Automatic Top Load Washing Machine Blue, White  (WTT80DBLTF)'
    }, 
    price: {
        mrp: 16990,
        cost: 10290,
        discount: '39%'
    },
    qty: 1,
    discount: 'Extra 5% Off', 
    subCategory: 'washingmachine',
    tagline: 'Deal of the Day',
    category: 'electronic',
    rating: '4.3'
},
{
    url: 'https://rukminim2.flixcart.com/image/612/612/l2p23rk0/iron/b/i/k/-original-imagdz3jvqmnukxt.jpeg?q=70', 
    detailUrl: 'https://rukminim2.flixcart.com/image/416/416/l2p23rk0/iron/b/i/k/-original-imagdz3jvqmnukxt.jpeg?q=70',
    title: {
        shortTitle: 'Dry Iron',
      
        longTitle: 'Nova Plus Amaze NI 10 1100 W Dry Iron  (Grey & Turquoise)'
    }, 
    price: {
        mrp: 899,
        cost: 429,
        discount: '52%'
    },
    qty: 1,
    discount: 'Extra 5% Off', 
    subCategory: 'dryiron',
    tagline: 'Deal of the Day',
    category: 'electronic',
    rating: '4.3'
},
{
    url: 'https://rukminim2.flixcart.com/image/612/612/xif0q/water-purifier/w/m/e/omega-audi-ro-uv-uf-tds-aqua-fresh-original-imagq69bg3upnuhh.jpeg?q=70', 
    detailUrl: 'https://rukminim2.flixcart.com/image/416/416/xif0q/water-purifier/w/m/e/omega-audi-ro-uv-uf-tds-aqua-fresh-original-imagq69bg3upnuhh.jpeg?q=70',
    title: {
        shortTitle: 'Aqua Fresh Watre Purifier',
      
        longTitle: 'Aqua Fresh Omega Audy+Ro+Uv+Uf+Tds+mineral 12 L RO + UV + UF + TDS Water Purifier  (White)'
    }, 
    price: {
        mrp: 16500,
        cost: 4299,
        discount: '73%'
    },
    qty: 1,
    discount: 'Extra 5% Off', 
    subCategory: 'waterpurifier',
    tagline: 'Deal of the Day',
    category: 'electronic',
    rating: '4.4'
},
{
        url: 'https://rukminim2.flixcart.com/image/416/416/kay9bbk0/bp-monitor/z/h/s/omron-hem-7124-original-imafsefchz2erwrf.jpeg?q=70', 
        detailUrl: 'https://rukminim2.flixcart.com/image/416/416/kay9bbk0/bp-monitor/z/h/s/omron-hem-7124-original-imafsefchz2erwrf.jpeg?q=70',
        title: {
            shortTitle: 'Blood Pressure monitor',
          
            longTitle: 'OMRON HEM-7124 Fully Automatic Digital Blood Pressure Monitor with Intellisense Technology Bp Monitor  (White)'
        }, 
        price: {
            mrp: 2310,
            cost: 1849,
            discount: '19%'
        },
        qty: 1,
        discount: 'Extra 5% Off', 
        subCategory: 'bpmonitor',
        tagline: 'Deal of the Day',
        category: 'electronic',
        rating: '4.4'
    },
{
    url: 'https://rukminim2.flixcart.com/image/612/612/xif0q/water-purifier/x/u/a/-original-imagnphdjjkusnha.jpeg?q=70', 
    detailUrl: 'https://rukminim2.flixcart.com/image/416/416/xif0q/water-purifier/x/u/a/-original-imagnphdjjkusnha.jpeg?q=70',
    title: {
        shortTitle: 'Water Purifier',
        longTitle: 'Pureit by HUL Advanced Max 6 L Mineral RO + UV + MF + MP Water Purifier with Mineral Cartridge  (White, Blue)',
    }, 
    price: {
        mrp: 18500,
        cost: 8999,
        discount: '51%'
    },
    qty: 1,
    discount: '51% off', 
    tagline: 'Deal of the Day',
    category: 'electronics',
    rating: '4',
    subCategory: 'waterPurifier'
},
{
    url: 'https://rukminim2.flixcart.com/image/612/612/kp8ntzk0/trimmer/l/s/e/0-5-12-mm-stainless-steel-v-055-professional-hair-trimmer-corded-original-imag3gx2pph9fu7h.jpeg?q=70', 
    detailUrl: 'https://rukminim2.flixcart.com/image/416/416/kp8ntzk0/trimmer/l/s/e/0-5-12-mm-stainless-steel-v-055-professional-hair-trimmer-corded-original-imag3gx2pph9fu7h.jpeg?q=70',
    title: {
        shortTitle: 'Trimmer',
        longTitle: 'VGR V-055 Professional Hair Trimmer Trimmer 120 min Runtime 4 Length Settings  (Black, Green)',
    }, 
    price: {
        mrp: 795,
        cost: 2455,
        discount: ' 68%'
    },
    qty: 1,
    discount: '67% off', 
    tagline: 'Deal of the Day',
    category: 'electronics',
    rating: '4.3',
    subCategory: 'trimmer'
},
{
    url: 'https://rukminim2.flixcart.com/image/612/612/kuh9yfk0/bp-monitor/2/i/c/bp02-bp02-dr-morepen-original-imag7knf4jzmjsnx.jpeg?q=70', 
    detailUrl: 'https://rukminim2.flixcart.com/image/416/416/kgpg5u80pkrrdj/health-care-appliances/h/v/5/bp02-dr-morepen-original-imafwxyum5ursedm.jpeg?q=70',
    title: {
        shortTitle: 'BP Monitor',
        longTitle: 'Dr. Morepen BP02 BP02 Bp Monitor  (White)',
    }, 
    price: {
        mrp: 1455,
        cost: 1099,
        discount: '24%'
    },
    qty: 1,
    discount: '24% off', 
    tagline: 'Deal of the Day',
    category: 'electronics',
    rating: '4.2',
    subCategory: 'bpMonitor'
},
];

module.exports = {products};
