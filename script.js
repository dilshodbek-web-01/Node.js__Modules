// Request - So`rov kelishi.
// Response - Javob berish.
// Protcess model syncxrone ishlaydi.

// Node.js da 3 xil module bor.

// 1. Local modullar - O`zimizning yozgan codelarimizni boshqa folderlarda ishlatish.
// 2. Core modullar - Node.js ni o`zida mavjud bo`lgan modullar.
// 3. Third party - NPM dan install qilingan hamma mo`dullar.

const Io = require("./index");
const io = new Io();

const warehouse = async () => {
  const action = process.argv[2];
  const fruit = process.argv[3];
  const weight = Number(process.argv[4]);

  let data = await io.readDoc("./warehouse.json");

  if (action === "add") {
    const newFruit = {
      name: fruit,
      weight,
    };

    const newDate = data.map((el) => {
      if (el.name == fruit) {
        return {
          ...el,
          weight: e.weight + weight
        }
      } else {
        return el;
      }
    });

    if (newDate.length) {
      io.writeDoc("./warehouse.json", [...newDate]);
    } else {
      io.writeDoc("./warehouse.json", [newFruit]);
    }
  }
};

warehouse();
