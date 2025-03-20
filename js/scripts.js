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
    const number = '0123456789'
    password.length >= 8 && number.toLowerCase().includes(password.charAt(0)) ? console.log('Contraseña válida') : console.log('Contraseña incorrecta');
}
sabrinasPassword('2CATALINA')
sabrinasPassword('1Camilass')

// 4️⃣ Macarena está revisando la gramática de un texto. Si la primera letra de la frase está en mayúscula y la frase termina con un punto, es correcta. Si no, está mal escrita. Crea una función que reciba una frase y determine si cumple ambas reglas.

const findCorrectParagraph = (paragraph) => {
    paragraph.charAt(0).toUpperCase() && paragraph.endsWith('.') ? console.log('La frase está bien escrita') : console.log('La frase está mal escrita');
}
findCorrectParagraph('Camila.')
findCorrectParagraph('1Camilass')


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

const dominioWeb = (dominio) => {
    if (dominio.endsWith('.com')) {
        console.log('Este dominio se usa para negocios'); 
    } else if(dominio.endsWith('.org')){
        console.log('Este dominio se usa para una organización');
    } else {console.log('Este dominio no es válido');
    }
}
dominioWeb('hola.com')
dominioWeb('adios.org')
dominioWeb('hola.adios')

// 8️⃣ Sabrina está revisando una lista de palabras. Si una palabra contiene la letra "z", la marcará como especial. Si no, será una palabra común. Crea una función que reciba una palabra y determine su categoría.

const wordCategory = (word) => {
    word.toLowerCase().includes('z') ? console.log('Palabra especial') : console.log('Palabra común');
}
wordCategory('aZúl')

//como se pondría que vale tanto mayúscula como minúscula. Si pongo word.includes('z').toUpperCase() me da error (aunque solo indique que es para mayúsculas, pero no me deja poner dos funciones en los strings)

const wordCategoryZ = (word) => {
    word.includes('z') || word.includes('Z') ? console.log('Palabra especial') : console.log('Palabra común');
}
wordCategoryZ('AZÚL')


// 9️⃣ Macarena está clasificando documentos según su urgencia. Si un mensaje contiene la palabra "urgente" en cualquier parte, lo priorizará. Si no, será un mensaje normal. Crea una función que reciba un mensaje y determine su nivel de prioridad.

const priorityMesage = (word) => {
    word.includes('urgente') ? console.log('MENSAJE PRIORITARIO') : console.log('Mensaje normal');
}
priorityMesage('Este mensaje urgente tiene que leerse ya.')
priorityMesage('Este mensaje no urge.')

// 🔟 Abby encontró una nota con un código en una casa abandonada. Si el código es un número par y tiene exactamente 4 dígitos, puede ser la combinación de una caja fuerte. Si es impar o tiene otra longitud, lo descartará. Crea una función que reciba un código y determine si Abby debe investigarlo.

const codeNote = (code) => {
    const parNumber = code % 2
    code.length === 4 && parNumber === 0 ? console.log('Esto es una buena pista') : console.log('Esto no es una pista');
}
codeNote('33339')
codeNote('4444')

// 1️⃣1️⃣ Camila está revisando invitaciones para un evento. Si el nombre del invitado empieza con "A", "E", "I", "O" o "U", se le asignará una mesa especial. Si empieza con otra letra, se le asignará una mesa normal. Crea una función que reciba un nombre y determine su ubicación.

const invitationAsingment = (name) => {
    const letter = 'AEIOU'
    letter.includes(name.toUpperCase().charAt(0)) ? console.log(name + ' Felicidades, tienes un hueco en la mesa especial') : console.log('Te vas a la mesa de los normalitos');
}
invitationAsingment('Alicia')
invitationAsingment('Carlos')

// 1️⃣2️⃣ Bego está verificando si un texto contiene lenguaje ofensivo. Si un mensaje contiene la palabra "tonto" o "feo", se marcará como inapropiado. Si no, será aceptado. Crea una función que reciba un mensaje y determine su categoría.

const ofensiveLenguaje = (message) => {
    message.includes('tonto') || message.includes('feo') ? console.log('Tu mensaje es inapropiado') : console.log('Tu mensaje entra dentro del lenguaje inclusive y no ofende a ningune persone')
}
ofensiveLenguaje('Eres tonto y feo')
ofensiveLenguaje('Te pareces a un orco de mordor')

// 1️⃣3️⃣ Sabrina quiere imprimir etiquetas con iniciales. Crea una función que reciba un nombre y un apellido y devuelva sus iniciales en mayúsculas, separadas por un punto.

const defineNameLastnameLabel = (name, lastname) => {
        console.log(name.toUpperCase().charAt(0) + '.' + lastname.toUpperCase().charAt(0));
}
defineNameLastnameLabel('maria', 'lafuente')

// 1️⃣4️⃣ Macarena está diseñando una campaña publicitaria. Si el título del anuncio tiene más de 20 caracteres, lo reducirá. Si tiene 20 o menos, lo usará tal cual. Crea una función que reciba un título y determine si debe ajustarse.

const advertisingTitle = (text) => {
    text.length > 20 ? console.log('Debes reducir la cantidad de caracteres') : console.log('Puedes usar este texto')
}
advertisingTitle('Apúntate a las clases de JavaScript, no te arrepentirás')
advertisingTitle('Apúntate a JS')

// 1️⃣5️⃣ Abby encontró una radio funcionando con interferencias. Si la señal incluye la palabra "ayuda" o "suministros", significa que alguien está pidiendo asistencia. Si no contiene estas palabras, lo ignorará. Crea una función que reciba un mensaje de radio y determine si Abby debe responder.

const decodeMessage = (signal) => {
    signal.includes ('ayuda') || signal.includes('suministros') ? console.log('ESTÁN PIDIENDO AYUDA') : console.log('No estamos seguros del mensaje, mejor no responder')
}
decodeMessage('Estamos rodeados de infectados, ayuda.')
decodeMessage('Te encontraré Abby')

// 1️⃣6️⃣ Camila quiere asegurarse de que los nombres de usuario no contengan espacios. Si un nombre tiene espacios, será inválido. Si no tiene, será aceptado. Crea una función que reciba un nombre de usuario y determine su validez.

//¿Por qué en el 11 no me coge el espacio como caracter pero en este sí?

const confirmValidUserName = (userName) => {
    userName.includes(' ') ? console.log('El nombre de usuario no puede contener espacios') : console.log('Nombre de usuario correcto');
}
confirmValidUserName('Maria Lafu')
confirmValidUserName('MariaLafu')

// 1️⃣7️⃣ Bego está registrando nuevas cuentas de clientes. Si un correo electrónico contiene "@" y ".", será válido. Si no tiene alguno de estos elementos, será inválido. Crea una función que reciba un email y determine si es correcto.

const validCorrectMail = (mail) => {
    mail.includes('@') && mail.includes('.') ? console.log('Tu correo es válido') : console.log('Correo inválido');
}
validCorrectMail('maria@lafu.')

// 1️⃣9️⃣ Macarena está validando números de identificación. Si un número tiene exactamente 8 caracteres y termina en una letra, será válido. Si no cumple estas condiciones, será inválido. Crea una función que reciba un número de identificación y determine si es correcto.

const validIdentificationNumber = (identificationNumber) => {
    const number = '0123456789'
    identificationNumber.length === 8 && !number.includes(identificationNumber.charAt(identificationNumber.length - 1)) ? console.log('La identificación es válida') : console.log('La identificación es inválida')
}
validIdentificationNumber('9dfghjuy')
validIdentificationNumber('abcdert56')


// 2️⃣0️⃣ Abby encontró una combinación de caja fuerte que parece ser un número de 4 dígitos. Quiere probar combinaciones aleatorias hasta encontrar una que termine en 7. Crea una función que genere un número de 4 dígitos que termine en 7.

const generateRoundNumber = () => {
    const roundNumber = Math.round(Math.random()*1000)
    console.log(roundNumber + '7');
}
generateRoundNumber()

// 2️⃣1️⃣ Macarena está seleccionando un color al azar para una promoción. Los colores posibles son "Rojo", "Azul", "Verde" y "Amarillo". Crea una función que devuelva uno de estos colores de forma aleatoria.

const aleatoryColor = () => {
    const aleatoryNumber = Math.floor(Math.random()*4)
    if (aleatoryNumber === 0) {
        console.log('Azul');
    } else if (aleatoryNumber === 1) {
        console.log('Rojo');
    } else if (aleatoryNumber === 2) {
        console.log('Verde');
    } else {console.log('Amarillo');
    }
}
aleatoryColor('color')

// 2️⃣2️⃣ Sabrina quiere generar una combinación de letras para un código de producto. La combinación debe tener 3 letras aleatorias en mayúsculas. Crea una función que genere y muestre esta combinación.

const aleatoryLettersGenerator = () => {
    const aleatoryLetters = 'abcdefghijklmñopqrstuvwxyz'
    console.log(aleatoryLetters.toUpperCase().charAt(Math.random()*27) + aleatoryLetters.toUpperCase().charAt(Math.random()*27) + aleatoryLetters.toUpperCase().charAt(Math.random()*27))
}
aleatoryLettersGenerator()

// 2️⃣3️⃣ Bego está revisando una lista de verbos para una clase de gramática. Necesita clasificar cada verbo según su conjugación. Crea una función que reciba dos verbos en infinitivo y determine si pertenecen a la primera ("-ar"), segunda ("-er") o tercera ("-ir") conjugación. La función deberá imprimir la clasificación de cada verbo.

//como se podría hacer más corto, o hacer que se escriba en la misma línea

const gramaticCorrection = (firstVerb, secondVerb) => {
    if (firstVerb.endsWith('ar')) {
        console.log(firstVerb + ' pertenece a la primera conjugación');
    } else if (firstVerb.endsWith('er')){
        console.log(firstVerb + ' pertenece a la segunda conjugación');
    } else if (firstVerb.endsWith('ir')){
        console.log(firstVerb + ' pertenece a la tercera conjugación');
    }
    if (secondVerb.endsWith('ar')) {
        console.log(secondVerb + ' pertenece a la primera conjugación');
    } else if (secondVerb.endsWith('er')){
        console.log(secondVerb + ' pertenece a la segunda conjugación');
    } else if (secondVerb.endsWith('ir')){
        console.log(secondVerb + ' pertenece a la tercera conjugación');
    }
}
gramaticCorrection('corregir', 'andar')

// 2️⃣4️⃣ Abby encontró una caja cerrada con un código de 5 números. Solo uno de cada 5 intentos abrirá la caja. Crea una función que simule 5 intentos y muestre si en alguno se abre la caja o no.

const aleatoryCode = () => {
    const firstCode = Math.round(Math.random()*100000)
    const secondCode = Math.round(Math.random()*100000)
    const thirdCode = Math.round(Math.random()*100000)
    const fourthCode = Math.round(Math.random()*100000)
    const fifthCode = Math.round(Math.random()*100000)
    console.log(`Intento uno:  ${firstCode}, no válido. Intento dos: ${secondCode}, no válido. Intento tres: ${thirdCode}, no válido. Intento cuatro: ${fourthCode}, no válido. Intento cinco: ${fifthCode}, *abriendo caja*.`);
}
aleatoryCode()

// 2️⃣5️⃣ Camila quiere generar una clave secreta para una nueva cuenta. La clave debe tener un número aleatorio entre 100 y 999 y una letra aleatoria entre "A" y "Z". Crea una función que genere una clave con ese formato.

const secretKey = () => {
    const aleatoryNumber = Math.floor(Math.random()*(900-100)+100)
    const letters = 'abcdefghijklmnñopqrstuvwxyz'
    console.log(aleatoryNumber + letters.toUpperCase().charAt(Math.random()*27));
}
secretKey()

// 2️⃣6️⃣ Macarena quiere jugar al Euromillones, pero como nunca le toca, ha decidido confiar en el destino. Quiere generar 5 números aleatorios entre 1 y 50, asegurándose de que si un número es menor que 10, aparezca con un "0" delante. Por ejemplo, un posible resultado sería: "08 10 33 35 49". Crea una función que genere y muestre esta combinación de números en el formato correcto.

//FALTA POR TERMINAR

const euromillonesNumber = () => {
    const aleatoryNumber = Math.floor(Math.random()*(50-1)+1)
    console.log(`${aleatoryNumber} ${aleatoryNumber} ${aleatoryNumber} ${aleatoryNumber}`);
    if (aleatoryNumber < 10) {
        `0 ${aleatoryNumber}`
    } else {aleatoryNumber}

}
euromillonesNumber()


// 2️⃣7️⃣ Sabrina necesita ocultar parte de un número de tarjeta de crédito. Dado un número de 16 dígitos como string, la función debe reemplazar todos los caracteres excepto los últimos 4 con asteriscos. Por ejemplo, "1234567812345678" debe mostrarse como **********5678.

const knowCreditCardNumber = (creditCardNumber) => {
    creditCardNumber.length === 16 ? console.log('************' + creditCardNumber.substring(creditCardNumber.length - 4)) : console.log('El número de la tarjeta debe contener 16 caracteres');
}
knowCreditCardNumber('1234567891234577');

// 2️⃣8️⃣ Camila quiere dividir frases largas en dos partes. Si una frase tiene más de 20 caracteres, debe dividirla en dos partes: los primeros 10 caracteres y el resto, separados por " - ". Si la frase tiene 20 o menos, se devuelve tal cual. Crea una función que realice esta división.

const paragraphDivisor = (paragraph) => {
    paragraph.substring(0,20) 
    if (paragraph.length === 20) {
        console.log(paragraph.substring(0, 10) + '-' + paragraph.substring(10, 20)); 
    } else { console.log(paragraph);
    }
}
paragraphDivisor('12345678912345678901')
paragraphDivisor('123456789123456789')

// 2️⃣9️⃣ Sabrina está encriptando mensajes secretos. Sabe que todos los mensajes deben tener 4 letras y quiere que cada letra de una palabra se sustituya por la siguiente en el abecedario (por ejemplo, "hola" se convertiría en "ipmb"). Si la letra es "z" o "Z", debe convertirse en "a" o "A" respectivamente. Crea una función que realice esta transformación en una palabra.

const encryptedMessage = (message) => {
    const letters = 'abcdefghijklmnñopqrstuvwxyz'
    
    
}



// 3️⃣0️⃣ Bego necesita verificar si dos palabras de 4 letras son palíndromos (es decir, si lee igual de derecha a izquierda y de izquierda a derecha, como "amor" y "roma"). Crea una función que determine si dos palabras son palíndromos.

const palindromeIdentifier = (firstWord, secondWord) => {
    firstWord.charAt(0) === secondWord.charAt(3) && firstWord.charAt(1) === secondWord.charAt(2) ? console.log(`${firstWord} y ${secondWord} son palíndromos`) : console.log('No se ha encontrado ningún palíndromo')
    }

palindromeIdentifier('roma', 'amor')
palindromeIdentifier('rmao', 'amor')