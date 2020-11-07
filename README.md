# Cifra de César CRYPME

## Índice

* [1. Introdução](#1-Introdução)
* [2. Tema](#2-Tema)
* [3. Como Utilizar](#3-Como-Utilizar)
* [4. Projeto Final](#4-Projeto-Final)


***

## 1. Introdução

Cifrar significa codificar. A [cifra de
César](https://pt.wikipedia.org/wiki/Cifra_de_C%C3%A9sar) é um dos primeiros
tipos de criptografias conhecidas na história. O imperador romano Júlio César
utilizava essa cifra para enviar ordens secretas aos seus generais no campo de
batalha.

![caeser-cipher](https://user-images.githubusercontent.com/11894994/60990999-07ffdb00-a320-11e9-87d0-b7c291bc4cd1.png)

A cifra de César é uma das técnicas mais simples de cifrar uma mensagem. É um
tipo de cifra por substituição, em que cada letra do texto original é
substituída por outra que se encontra há um número fixo de posições
(deslocamento) mais a frente do mesmo alfabeto.

Por exemplo se usarmos o deslocamento (_offset_) de 3 posições:

* Alfabeto sem cifrar: A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
* Alfabeto com cifra:  D E F G H I J K L M N O P Q R S T U V W X Y Z A B C
* A letra A será D
* A palavra CASA será FDVD

Atualmente todas as cifras de substituição alfabética simples, são decifradas
com facilidade e não oferecem muita segurança na comunição, mas a cifra de César
muitas vezes pode fazer parte de um sistema mais complexo de criptografia, como
a cifra de Vigenère, e tem aplicação no sistema ROT13.

## 2. Tema

CRYPME é o simulador de uma empresa de segurança que criptografa e descriptografa
mensagens para uma comunicação profissional/pessoal mais segura.

O <b>principal usuário</b> desse produto é todos que desejam trocar informações sensíveis
de uma maneira indireta.
De uma forma prática, o CRYPME te da uma solução para enviar e descobrir dados sigilosos.



## 3. Como Utilizar

Acesse o CRYPME <a href="https://silvassara.github.io/SAP005-cipher/">aqui!</a>
<ul>Para CODIFICAR:
  <li>Digite o deslocamento de 1 a 20</li>
  <li>Digite a mensagem desejada</li>
  <li>Clique no botão "CRIPTOGRAFAR MENSAGEM</li>
  <li>O resultado aparecerá na mesma caixa onde você inseriu a mensagem</li>
</ul>

<ul>Para DESCODIFICAR:
  <li>Digite o deslocamento de 1 a 20</li>
  <li>Digite a mensagem desejada</li>
  <li>Clique no botão "DESCRIPTOGRAFAR MENSAGEM</li>
  <li>O resultado aparecerá na mesma caixa onde você inseriu a mensagem</li>
</ul>



### Projeto Final

A interface foi escolhida com o objetivo de ser simples e prática visando apenas a criptografia e descriptografia de mensagens, sem compartilhamento externo.



