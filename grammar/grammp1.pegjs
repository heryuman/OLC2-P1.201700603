start
    = _ instrucciones _

instrucciones
    = instruccion (_ instruccion)*

instruccion
    = declaraciones

declaraciones
    = tipo:tipo _ id:identificador _ ";" {return {tipo:tipo,id:id};}
    / tipo:tipo _ id:identificador _ "=" _ expresion ";"

tipo
    = "int" / "float" / "char" / "string" / "boolean"

expresion
    = left:termino _ "+" _ right:expresion { return left + right; }
    / termino

termino
    = flotante
    / entero
    / char
    / "false"
    / "true"


entero
	= [0-9]+
flotante
	= digits:entero "." decimals:entero {return parseFloat(digits.join("") + "." + decimals.join(""));}

char
	="'"char:[a-zA-Z]"'" {return char;} 

identificador
    = [a-zA-Z_][a-zA-Z0-9_]* {return text();}

_  // Regla para omitir espacios en blanco y saltos de línea
    = [ \t\n\r]*