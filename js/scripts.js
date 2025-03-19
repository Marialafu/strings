// 1️⃣ Camila está revisando nombres en una lista. Si un nombre tiene más de 6 caracteres, debe marcarlo como "Nombre largo". Si tiene 6 o menos, lo marcará como "Nombre corto". Crea una función que reciba un nombre y determine su clasificación.

const knowLengthName = (name) => {
    name.length <= 6 ?  console.log('Nombre corto') : console.log('Nombre largo')
}
knowLengthName('Abby')

// 2️⃣ Bego está escribiendo un email, pero quiere asegurarse de que el texto termina en un punto. Crea una función que reciba una frase y determine si acaba con "." ("Formato correcto") o no ("Falta el punto final").

const knowIfTextHasDot = (text) => {
    text.endsWith('.') ? console.log('Formato correcto') : console.log('Falta el punto final')
}
knowIfTextHasDot('Hola.adios.')

// 3️⃣ Sabrina está verificando contraseñas. Si la contraseña tiene más de 8 caracteres y empieza con un número, será válida. Si no cumple estas condiciones, será inválida. Crea una función que reciba una contraseña y determine si es segura.

const sabrinasPassword = (password) => {
    
    password.length > 8 && string.charAt ? console.log('Contraseña válida') : console.log('Contraseña incorrecta');
}
sabrinasPassword('Camila')
sabrinasPassword('1Camilas')

// 4️⃣ Macarena está revisando la gramática de un texto. Si la primera letra de la frase está en mayúscula y la frase termina con un punto, es correcta. Si no, está mal escrita. Crea una función que reciba una frase y determine si cumple ambas reglas.



// 5️⃣ Abby encontró un mensaje pintado en la pared con dos palabras. Si ambas palabras tienen la misma cantidad de letras, lo tomará como una pista. Si no, lo ignorará. Crea una función que reciba dos palabras y determine si el mensaje es importante.

const paintClue = (firstWord, secondWord) => {
    firstWord.length === secondWord.length ? console.log('Es una pista') : console.log('No es una pista');
    
}
paintClue('Camila', 'Cincos')

// 6️⃣ Camila quiere asegurarse de que un número de teléfono tiene el formato correcto. Debe tener exactamente 9 caracteres. Crea una función que reciba un número como string y determine si es válido o no.

const correctPhoneNumber = (phoneNumber) => {
    phoneNumber.length === 9 ? console.log('Es válido') : console.log('No es válido');
    ;
}
correctPhoneNumber('123456789')

// 7️⃣ Bego está eligiendo un dominio para su nueva web. Si la web termina en ".com", se usará para negocios. Si termina en ".org", será para una organización. Si no es ninguno de estos, el dominio no es válido. Crea una función que reciba un dominio y determine su clasificación.

//if endsWith .com ...

// 8️⃣ Sabrina está revisando una lista de palabras. Si una palabra contiene la letra "z", la marcará como especial. Si no, será una palabra común. Crea una función que reciba una palabra y determine su categoría.



// 9️⃣ Macarena está clasificando documentos según su urgencia. Si un mensaje contiene la palabra "urgente" en cualquier parte, lo priorizará. Si no, será un mensaje normal. Crea una función que reciba un mensaje y determine su nivel de prioridad.

// 🔟 Abby encontró una nota con un código en una casa abandonada. Si el código es un número par y tiene exactamente 4 dígitos, puede ser la combinación de una caja fuerte. Si es impar o tiene otra longitud, lo descartará. Crea una función que reciba un código y determine si Abby debe investigarlo.

// 1️⃣1️⃣ Camila está revisando invitaciones para un evento. Si el nombre del invitado empieza con "A", "E", "I", "O" o "U", se le asignará una mesa especial. Si empieza con otra letra, se le asignará una mesa normal. Crea una función que reciba un nombre y determine su ubicación.

// 1️⃣2️⃣ Bego está verificando si un texto contiene lenguaje ofensivo. Si un mensaje contiene la palabra "tonto" o "feo", se marcará como inapropiado. Si no, será aceptado. Crea una función que reciba un mensaje y determine su categoría.

// 1️⃣3️⃣ Sabrina quiere imprimir etiquetas con iniciales. Crea una función que reciba un nombre y un apellido y devuelva sus iniciales en mayúsculas, separadas por un punto.

// 1️⃣4️⃣ Macarena está diseñando una campaña publicitaria. Si el título del anuncio tiene más de 20 caracteres, lo reducirá. Si tiene 20 o menos, lo usará tal cual. Crea una función que reciba un título y determine si debe ajustarse.

// 1️⃣5️⃣ Abby encontró una radio funcionando con interferencias. Si la señal incluye la palabra "ayuda" o "suministros", significa que alguien está pidiendo asistencia. Si no contiene estas palabras, lo ignorará. Crea una función que reciba un mensaje de radio y determine si Abby debe responder.

// 1️⃣6️⃣ Camila quiere asegurarse de que los nombres de usuario no contengan espacios. Si un nombre tiene espacios, será inválido. Si no tiene, será aceptado. Crea una función que reciba un nombre de usuario y determine su validez.

// 1️⃣7️⃣ Bego está registrando nuevas cuentas de clientes. Si un correo electrónico contiene "@" y ".", será válido. Si no tiene alguno de estos elementos, será inválido. Crea una función que reciba un email y determine si es correcto.

// 1️⃣9️⃣ Macarena está validando números de identificación. Si un número tiene exactamente 8 caracteres y termina en una letra, será válido. Si no cumple estas condiciones, será inválido. Crea una función que reciba un número de identificación y determine si es correcto.

// 2️⃣0️⃣ Abby encontró una combinación de caja fuerte que parece ser un número de 4 dígitos. Quiere probar combinaciones aleatorias hasta encontrar una que termine en 7. Crea una función que genere un número de 4 dígitos que termine en 7.

// 2️⃣1️⃣ Macarena está seleccionando un color al azar para una promoción. Los colores posibles son "Rojo", "Azul", "Verde" y "Amarillo". Crea una función que devuelva uno de estos colores de forma aleatoria.

// 2️⃣2️⃣ Sabrina quiere generar una combinación de letras para un código de producto. La combinación debe tener 3 letras aleatorias en mayúsculas. Crea una función que genere y muestre esta combinación.

// 2️⃣3️⃣ Bego está revisando una lista de verbos para una clase de gramática. Necesita clasificar cada verbo según su conjugación. Crea una función que reciba dos verbos en infinitivo y determine si pertenecen a la primera ("-ar"), segunda ("-er") o tercera ("-ir") conjugación. La función deberá imprimir la clasificación de cada verbo.

// 2️⃣4️⃣ Abby encontró una caja cerrada con un código de 5 números. Solo uno de cada 5 intentos abrirá la caja. Crea una función que simule 5 intentos y muestre si en alguno se abre la caja o no.

// 2️⃣5️⃣ Camila quiere generar una clave secreta para una nueva cuenta. La clave debe tener un número aleatorio entre 100 y 999 y una letra aleatoria entre "A" y "Z". Crea una función que genere una clave con ese formato.

// 2️⃣6️⃣ Macarena quiere jugar al Euromillones, pero como nunca le toca, ha decidido confiar en el destino. Quiere generar 5 números aleatorios entre 1 y 50, asegurándose de que si un número es menor que 10, aparezca con un "0" delante. Por ejemplo, un posible resultado sería: "08 10 33 35 49". Crea una función que genere y muestre esta combinación de números en el formato correcto.

// 2️⃣7️⃣ Sabrina necesita ocultar parte de un número de tarjeta de crédito. Dado un número de 16 dígitos como string, la función debe reemplazar todos los caracteres excepto los últimos 4 con asteriscos. Por ejemplo, "1234567812345678" debe mostrarse como **********5678.

// 2️⃣8️⃣ Camila quiere dividir frases largas en dos partes. Si una frase tiene más de 20 caracteres, debe dividirla en dos partes: los primeros 10 caracteres y el resto, separados por " - ". Si la frase tiene 20 o menos, se devuelve tal cual. Crea una función que realice esta división.

// 2️⃣9️⃣ Sabrina está encriptando mensajes secretos. Sabe que todos los mensajes deben tener 4 letras y quiere que cada letra de una palabra se sustituya por la siguiente en el abecedario (por ejemplo, "hola" se convertiría en "ipmb"). Si la letra es "z" o "Z", debe convertirse en "a" o "A" respectivamente. Crea una función que realice esta transformación en una palabra.

// 3️⃣0️⃣ Bego necesita verificar si dos palabras de 4 letras son palíndromos (es decir, si lee igual de derecha a izquierda y de izquierda a derecha, como "amor" y "roma"). Crea una función que determine si dos palabras son palíndromos.