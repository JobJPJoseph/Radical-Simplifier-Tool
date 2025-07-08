# Solve #

## Purpose
    This class will focus on solving the radical expression

### constructor
    This will call the interface class and ask for the user's input

### Convert
    This method will convert the input into a number.

### FindFactors
    This will focus on collecting all the factors from 2 to including n. n being the user's input. The factors need to be in pairs.

### SolveExpression
    This will focus on solving the expression given input

## Update
    There are going to a couple new methods and some changes to previously established methods

### SolveNumber
    This was originally called `SolveExpression`, now being called `SolveNumber`. Instead of returning a string, it will return an object. The object will have two properties: wholeNumber, radical.

### SolveVariable
    This will focus solving for the variable piece of the expression. We are assuming that the index is 2.

### SplitExpression
    This will focus on structuring the expression into pieces. Reconignizing the part that is a number and the part that is a variable. Also return a object {whole: string, radical: string}.

### format
    This will focus obtaining the result of solving the expression and format back into a simplified form of the original expression.
