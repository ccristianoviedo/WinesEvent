export function getItem (id) {    
    return new Promise((resolve)=>{ 
        const items=[
            {
                id:1,
                img:"http://drive.google.com/uc?export=view&id=1OoNfddGGGdEEQPKcNNg-sVmXuc6CfaJN",
                name:"RUTINI",
                price:3400,
                stock:0,          
                description:"Rojo granate límpido con reflejos violáceos.En nariz se destacan aromas frutales como la ciruela, florales como la violeta y un toque especiado de regaliz.En boca la tipicidad del varietal se presenta con sabores a fruta negra, jugoso, fresco y con una acidez equilibrada.",
                harvest:2019,
                variety:"Malbec",
                category:'malbec',
                breeding:"12 meses el 20% del corte en roble francés'", 
                suggest:"Carnes rojas grilladas y horneadas, cordero, empanadas regionales, quesos maduros."
                
            },
            {
                id:2,
                img:"http://drive.google.com/uc?export=view&id=11lt-y-3IvuOktIG8ikI62JReNh4S9ciZ",
                name:"TROMPETER",
                price:3400, 
                stock:22,
                description:"De color rojo violáceo brillante, seduce con sus aromas frutales (ciruela) y especiados (canela, cardamomo, pimienta negra). Posee gran cuerpo y su vivaz estructura acentúa los taninos intensos que se vuelven aterciopelados en el retrogusto.",
                harvest:2018,
                variety:"100% Malbec",
                category:"malbec",
                breeding:"7 meses en barricas de roble: 30% americano nuevo, 30% francés nuevo y 40% americano de 2° y 3° uso.", 
                suggest:"Sugerimos acompañar un curry de ternera."
            },
            {
                id:3,
                img:"http://drive.google.com/uc?export=view&id=1_BHlmNl_yQ4h0NwyNqMCHJYnb72PqoFB",
                name:"PORTILLO",
                price:900, 
                stock:23,
                description:"Vino de color rojo rubí con tonos violáceos de gran intensidad.",
                harvest:2020,
                variety:"malbec",
                category:"malbec",
                breeding:"roble francés'", 
                suggest:"Carnes rojas grilladas y horneadas"
            },
            {
                id:4,
                img:"http://drive.google.com/uc?export=view&id=1PDDSgFIf15tpbFiFHgxxiNQTcvGKACdz",
                name:"LUIGI BOSCA",
                price:1400, 
                stock:5,
                description:"Luigi Bosca Malbec es un tinto de color rojo violáceo brillante. Sus aromas son intensos y amables, con notas que recuerdan a frutas rojas, y tonos algo florales y espe­ciados.",
                harvest:2017,
                variety:"malbec",
                category:"malbec",
                breeding:"5 años roble francés'", 
                suggest:"Carnes rojas, Pastas."
                
            },
            {
                id:5,
                img:"http://drive.google.com/uc?export=view&id=1_E3DNOULO0YLIxZxGsd-gzBCAuRHg8xT",
                name:"RUTINI MERLOT",
                price:5200, 
                stock:0,
                description:"Rojo intenso con matiz violáceo. Regala una nariz generosa y aromática (frutos rojos y negros, como la mora) y sugestivos acentos de cacao y tabaco.",
                harvest:2019,
                variety:"merlot",
                category:"merlot",
                breeding:"12 meses. Tipo de roble: 50% francés, nuevo; 50% francés, de 1 año.", 
                suggest:"Ideal para acompañar carnes rojas grilladas, cordero patagónico, pastel de carne y guisados criollos."
            },
            {
                id:6,
                img:"http://drive.google.com/uc?export=view&id=1RWo3So9HteOYHE47hvAkPvAz8M4dGnrW",
                name:"LUIGUI BOSCA CHARDONNAY",
                price:3470,            
                stock:2,
                description:"De color amarillo dorado, con aromas de ananá, mango y melón. Notas de miel y pan tostado. Sutil aporte de la vainilla proveniente de su paso por roble francés.",
                harvest:2019,
                variety:"Chardonnay",
                category:"Chardonnay",
                breeding:"roble francés'", 
                suggest:"Mariscos, Pescados"
            },
            {
                id:7,
                img:"http://drive.google.com/uc?export=view&id=1zVspbccGYIWC78TJvjlJSSj6DuExmWVp",
                name:"ESTANCIA MENDOZA",
                price:3800, 
                stock:3,
                description:"Los característicos destellos amarillos verdosos y una intensa gama aromática de frutas y flores, definen a este exquisito varietal.",
                harvest:2019,
                variety:"chardonnay",
                category:"Chardonnay",
                breeding:"roble francés'", 
                suggest:"Mariscos, Pescados"
            },
            {
                id:8,
                img:"http://drive.google.com/uc?export=view&id=1_kk-C0_MNdSoIuNbZLmzOysiEyIFXNu7",
                name:"ZUCARDI",
                price:4900,
                stock:3,
                description:"Rojo granate límpido con reflejos violáceos.En nariz se destacan aromas frutales como la ciruela, florales como la violeta y un toque especiado de regaliz.En boca la tipicidad del varietal se presenta con sabores a fruta negra, jugoso, fresco y con una acidez equilibrada.",
                harvest:2019,
                variety:"chardonay",
                category:"chardonnay",
                breeding:"12 meses el 20% del corte en roble francés'", 
                suggest:"Carnes rojas grilladas y horneadas, cordero, empanadas regionales, quesos maduros." 
                 
            },
            {
                id:9,
                img:"http://drive.google.com/uc?export=view&id=1vAcvNZj5rEVxExEiLoCjGhx_B0AXk0NI",
                name:"ZUCARDI",
                price:4900, 
                stock:3,
                description:"Rojo granate límpido con reflejos violáceos.En nariz se destacan aromas frutales como la ciruela, florales como la violeta y un toque especiado de regaliz.En boca la tipicidad del varietal se presenta con sabores a fruta negra, jugoso, fresco y con una acidez equilibrada.",
                harvest:2019,
                variety:"Malbec",
                category:"vinos",
                breeding:"12 meses el 20% del corte en roble francés'", 
                suggest:"Carnes rojas grilladas y horneadas, cordero, empanadas regionales, quesos maduros."
            }                        
        ]           
        const item = items.filter(item=>item.id===+id)

        setTimeout(()=>{
            resolve(item[0])
        },500)
    })
}