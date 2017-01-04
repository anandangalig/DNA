# _DNA Sequence Builder: Independent Project on Drupal_

####_A basic app practicing Unit Testing, Functional Testing, and AJAX calls Drupal 7. 12/16/2016_

#### By _**Anand Angalig**_


## Description

_This web application takes user inputted sequence of a DNA strand and generates the complementary strand sequence to make a double-stranded DNA. It correctly pairs nucleotides A-T, C-G, and vice versa. The second part of this page demonstrates AJAX calls to an existing content type and displays data without going to a different page._

![Alt text](http://www.livescience.com/images/i/000/068/518/original/dna-strand.jpeg?interpolation=lanczos-none&downsize=*:1000")

## Setup/Installation Requirements
  * _Install and initiate MAMP or similar solution stack of your preference if your local machine does not have them already_

  * _Clone the project directory from https://github.com/anandangalig/DNA.git_

  * _Initiate MAMP in the highest level of the cloned directory_

  * _Use 'dna' as name and password for database set-up purposes_

  * _Open PHPMyAdmin, create a new database, and import the latest zipped .sql file from the db-backup folder_

  * _Go to localhost:8888 in your favorite browser to use the application_

  * _To run the tests:_
    * _Make sure Testing and DNA modules are enabled on the Module tab of the Admin menu_
    * _Go to Configuration tab, click on Testing under Development panel_
    * _Scroll down to 'Independent Project Tests' section and check mark it_
    * _Click Run tests_


## Specs:
* _Input: a_
* _Output: A-T_

* _Input: a,c_
* _Output: A-T, C-G_

* _Input: a,t,c,G_
* _Output: A-T, T-C, C-G, G-C_

* _Input: a c g_
* _Output: A-T, C-G, G-C_

* _Input: k_
* _Output: Error message: "DNA has only 4 acceptable nucleotides: A, T, C, and G."_



## Known Bugs
_No bugs known. If found, please bring it to my attention via e-mail._


## Support and Contact Details
_Please feel free to contact us at:_
    _anandangalig@gmail.com_

## Technologies Used

* _Drupal 7_
* _PHP_
* _AJAX_
* _SimpleTest_


### License
_Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:_

_The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software._

_THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE._

Copyright (c) 2016 **_Anand Angalig_**
