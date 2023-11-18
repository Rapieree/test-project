// https://github.com/ozum/joi18n/blob/master/locales/ru_RU.json
// Original english example https://gist.github.com/arifmahmudrana/b991f1c15162654b3a481780884c0d4d
const russianLocaleObject = {
  "any": {
    "unknown": `{{#label}} не разрешен`,
    "invalid": `{{#label}} содержит недопустимое значение`,
    "empty": `{{#label}} не должен быть пустым`,
    "required": `{{#label}} является обязательным`,
    "allowOnly": `{{#label}} должен быть одним из {{#valids}}`,
    "default": `{{#label}} вызвал ошибку при выполнении метода default`
  },
  "alternatives": {
    "base": `{{#label}} не соответствует ни одной из допустимых альтернатив`
  },
  "array": {
    "base": `{{#label}} должен быть массивом`,
    "includes": `{{#label}} в позиции {{#pos}} не соответствует ни одному из допустимых типов`,
    "includesSingle": `единственное значение "{{#label}}" не соответствует ни одному из допустимых типов`,
    "includesOne": `{{#label}} в позиции {{#pos}} не проходит проверку, потому что {{#reason}}`,
    "includesOneSingle": `единственное значение "{{#label}}" не проходит проверку, потому что {{#reason}}`,
    "includesRequiredUnknowns": `{{#label}} не содержит {{#unknownMisses}} требуемых значений`,
    "includesRequiredKnowns": `{{#label}} не содержит {{#knownMisses}}`,
    "includesRequiredBoth": `{{#label}} не содержит {{#knownMisses}} и {{#unknownMisses}} других требуемых значений`,
    "excludes": `{{#label}} в позиции {{#pos}} содержит исключенное значение`,
    "excludesSingle": `единственное значение "{{#label}}" содержит исключенное значение`,
    "min": `{{#label}} должен содержать не меньше {{#limit}} элементов`,
    "max": `{{#label}} должен содержать не больше {{#limit}} элементов`,
    "length": `{{#label}} должен содержать {{#limit}} элементов`,
    "ordered": `{{#label}} в позиции {{#pos}} не проходит проверку, потому что {{#reason}}`,
    "orderedLength": `{{#label}} в позиции {{#pos}} не проходит проверку, потому что массив должен содержать не больше {{#limit}} элементов`,
    "sparse": `{{#label}} не должен быть разреженным массивом`,
    "unique": `{{#label}} позиция {{#pos}} содержит дублирующееся значение`
  },
  "boolean": {
    "base": `{{#label}} должен быть булевым типом`
  },
  "binary": {
    "base": `{{#label}} должен быть буфером или строкой`,
    "min": `{{#label}} должен быть не меньше {{#limit}} байт`,
    "max": `{{#label}} должен быть не больше {{#limit}} байт`,
    "length": `{{#label}} должен быть равным {{#limit}} байт`
  },
  "date": {
    "base": `{{#label}} должен быть числом миллисекунд или валидной датой в строковом формате`,
    "min": `{{#label}} должен быть не меньше "{{#limit}}"`,
    "max": `{{#label}} должен быть не больше "{{#limit}}"`,
    "isoDate": `{{#label}} должен быть валидной датой, соответствующей стандарту ISO 8601`,
    "ref": `{{#label}} ссылается на "{{#ref}}", не являющегося датой`
  },
  "function": {
    "base": `{{#label}} должен быть функцией`
  },
  "object": {
    "base": `{{#label}} должен быть объектом`,
    "child": `дочерний элемент "{{#label}}" не проходит проверку, потому что {{#reason}}`,
    "min": `{{#label}} должен иметь не меньше {{#limit}} дочерних элементов`,
    "max": `{{#label}} должен иметь не больше {{#limit}} дочерних элементов`,
    "length": `{{#label}} должен иметь {{#limit}} дочерних элементов`,
    "allowUnknown": `{{#label}} не разрешен`,
    "with": `{{#label}} не найден обязательный сопуствующий ключ "{{#peer}}"`,
    "without": `{{#label}} конфликт с запрещённым сопутствующим ключём "{{#peer}}"`,
    "missing": `{{#label}} должен содержать не меньше одного из {{#peers}}`,
    "xor": `{{#label}} содержит конфликт между взаимоисключающими ключами {{#peers}}`,
    "or": `{{#label}} должен содержать не меньше одного из {{#peers}}`,
    "and": `{{#label}} содержит {{#present}} без требуемых сопуствующих ключей {{#missing}}`,
    "nand": `"{{#main}}" не должен существовать одновременно с {{#peers}}`,
    "assert": `"{{#ref}}" не прошел проверку, потому что "{{#ref}}" не {{#message}}`,
    "rename": {
      "multiple": `{{#label}} не может переименовать дочерний элемент "{{#from}}", потому что множественные переименования запрещены и другой ключ уже был переименован в "{{#to}}"`,
      "override": `{{#label}} не может переименовать дочерний элемент "{{#from}}", потому что замещение запрещено и цель "{{#to}}" существует`
    },
    "type": `должен быть экземпляром "{{#type}}"`
  },
  "number": {
    "base": `{{#label}} должен быть числом`,
    "min": `{{#label}} должен быть не меньше {{#limit}}`,
    "max": `{{#label}} должен быть не больше {{#limit}}`,
    "less": `{{#label}} должен быть меньше {{#limit}}`,
    "greater": `{{#label}} должен быть больше {{#limit}}`,
    "float": `{{#label}} должен быть числом с плавающей точкой`,
    "integer": `{{#label}} должен быть целым числом`,
    "negative": `{{#label}} должен быть отрицательным числом`,
    "positive": `{{#label}} должен быть положительным числом`,
    "precision": `{{#label}} должен иметь не больше {{#limit}} цифр после запятой`,
    "ref": `{{#label}} ссылается на "{{#ref}}", не являющегося числом`,
    "multiple": `{{#label}} должен быть кратным {{#multiple}}`
  },
  "string": {
    "base": `{{#label}} должен быть строкой`,
    "min": `{{#label}} длина должна быть не меньше {{#limit}} символов`,
    "max": `{{#label}}длина должна быть не больше {{#limit}} символов`,
    "length": `{{#label}} длина должна быть равной {{#limit}}`,
    "alphanum": `{{#label}} должен содержать только буквенно-цифровые символы`,
    "token": `{{#label}} должен содержать только буквенно-цифровые символы и нижнее подчеркивание`,
    "regex": {
      "base": `{{#label}} со значением "{{#value}}" не соответствует требуемому паттерну: {{#pattern}}`,
      "name": `{{#label}} со значением "{{#value}}" не соответствует паттерну {{#name}}`
    },
    "email": `{{#label}} должен быть валидным email-адресом`,
    "uri": `{{#label}} должен быть валидным uri`,
    "uriCustomScheme": `{{#label}} должен быть валидным uri со схемой, соответствующей паттерну {{#scheme}}`,
    "isoDate": `{{#label}} должен соответствовать формату даты ISO 8601`,
    "guid": `{{#label}} должен быть валидным GUID`,
    "hex": `{{#label}} должен содержать только шестнадцатеричные символы`,
    "hostname": `{{#label}} должен быть валидным именем хоста (hostname)`,
    "lowercase": `{{#label}} должен содержать только строчные символы`,
    "uppercase": `{{#label}} должен содержать только заглавные символы`,
    "trim": `{{#label}} не должен содержать пробельные символы в начале или конце строки`,
    "creditCard": `{{#label}} должен быть кредитной картой`,
    "ref": `{{#label}} ссылается на "{{#ref}}", не являющегося числом`,
    "ip": `{{#label}} должен быть валидным ip-адресом с {{#cidr}} CIDR`,
    "ipVersion": `{{#label}} должен быть валидным  ip-адресом одной из следующих версий {{#version}} с {{#cidr}} CIDR`
  }
};

function flattenObject(obj: any, prefix: string = ``) {
  let flattened: {[key: string]: any} = {};

  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      if (typeof obj[key] === `object` && !Array.isArray(obj[key])) {
        const nestedObject = flattenObject(obj[key], prefix + key + `.`);
        flattened = {...flattened, ...nestedObject};
      } else {
        flattened[prefix + key] = obj[key];
      }
    }
  }

  return flattened;
}

export const joiRussianLocale = flattenObject(russianLocaleObject);
