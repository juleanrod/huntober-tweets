# Week 1
This week our challenges all deal with Strings! As one of JavaScript's
primitive data structures, Strings are critical to understand and manipulate.
This week we will be discovering hidden messages by manipulating a given
string. Your solutions should account for any non-empty string. On Friday we'll
combine our functions to decode a message.
Feel free to use JavaScript's built-in String methods.
<details>
<summary><a href="https://blog.barbaralaw.me/huntober-2022-day-1">The Challenge - Day 1</a></summary>


    Oh no! How did this happen?! Somehow similar-looking numbers and letters have
    been confused in our document. Someone may have been messing around writing
    naughty words on a calculator. We need to get them back to normal.

    Below, find the mix-ups that have been made. Note: the confusion happened in
    both directions and was case-sensitive.

    '0' <-> 'O'      '5' <-> 'S'
    '1' <-> 'I'      '6' <-> 'G'
    '2' <-> 'Z'      '7' <-> 'L'
    '3' <-> 'E'      '8' <-> 'B'
    '4' <-> 'h'      '9' <-> 'q'

    As an example, here is how a string looks before and after the characters are
    fixed:

    "PR0-T1P #hqB: 1T'5 N1C3 T0 5AY H3770."
    implement fix function ->
    "PRO-TIP #498: IT'S NICE TO SAY HELLO."

    Please create a function that will fix a given string of this mistake before
    incalculable damage can be done!
</details>

<details>
<summary><a href="https://blog.barbaralaw.me/huntober-2022-day-2">The Challenge - Day 2</a></summary>

    This is awkward... I had a challenge planned for today, but I kept the
    computer open while I went to water my plants and came back to chaos on the
    screen. Not to worry, though! I've figured out what happened and we'll fix
    it today, ready to get back to our main decoding functions tomorrow.

    It turns out that a cat snuck in the house and decided to do some typing
    while I was away from my desk. Lucky break though, somehow the last key the
        cat managed to type was a lowercase 'c', and it also somehow managed to
        be the only lowercase 'c' the cat typed.

    If we remove everything up to and including that first 'c' we'll be at a
    great starting point! Go ahead and scrap all that cat scratch from the
    string below.
    
    "af)|Cz>:CGAHY1_2+(OHYYTM!2vka,&yAlWJ3.r&ZVs4F5&bEa<1r1_nlsR!eA-dOUmgwd2=CE7?ynnl+KQf8lW8u4/Nh1|D7SK2uYz-Y
    $YD)q.VmLD-&P(lL=:HDMA1!?_R#P,V3bKLqUp_t.X:_dM<Mr9zQ~fKJOBDF&Qjen=d
    ZAR8ze5g-gj@aZ/I:M:!.IBXLq@vN&8L7oH,
    /0RFtH+.7%eXtM/mxV7*%0Hj.?FSm.Kh8=@jlUJ_S.ApQzye-xB7ZVA2AwEaxTa_snPX?>D5th&Ag/9)7%#uMN=J<h!#prB=:CI;U_.T5*#rb)9q<ht~W<BOmQlmy.<8EqIlR(Gh~~$zmW;Y$7dn-$bW1jf%PL),krpzE
    LQwsG;EQ;l:Z;+6#.3)KDA+s#k#YMmUhm% 2KB)GqR
    U@4B>+A9Vh62@:&SNKVas5%&N6Oz!s/%7(Pd1xWy#Kv>uqyX=VEyHbe-64|ex^&
    2W(gD=>FT*?tMZO$(+B8uTj,DU2~QST(B|xls=9kzN|:4hXt~:R4|nir,6RN8fg~3!3!^!yWZ)bE@SI.zV5Z%V9Qf_^
    4az$?wqtWrRu+1aS9<%I=!xW.:ps
    f).($Qz9s;8:uxVqJN9K$42NG(0=j)wZ&U1oB?v^7WVP6QE6-?L;^aglPd5dHO(L2TT5+$NeK-P;js-UAiWCI7>Yr&8|md-X)U=%IpuY)9iymv~
    _S^ ,&0|(22&(mIcux_4a196w^FN78kz2kX1k&Psc53d
    ctbl?Eek!kX7Ii.QR~M11<T!,w^xHVn4^Q=HH4#)=AevEek!ux_4a196w^FN7Eek!8kz2kX1k&Psc53d
    ctbl?kX7Ii.QR~M11<T!,w^xHVn4^Q=HH4#)=AEek!Eek!cvEek!MABf|bEek!dPLpPhh=>%UH<%/^H;8gSAkhmUCu:K?*jzEek!LYC/:E*RU=|s7jWDf8z7-zFqS<Ntoav?m8<Q(1ur3Dpd)(XjY1pE)but>eG@QfEek!$Wx8NRZgmQ5t2
    kJd,?_R@%muEJBTdQ0-%mHHW20i8wqMK~Co^w?34ag9idsTeXgfqy4IEek!z7Q?Q)nG~5@~ieY_B=6!
    sVk~=Ts3T>j/ZAS)AKX3zOocGL
    icK#-x0Eek!yE+2*fz.4&%<>:RHx/B+IFRG*AK1Hn*PQZpEek!v;ZUzWcJC%lym^:+;GcC!qt@nS5SQEek!ikESbYI#-A.Sv
    .ksat s'worrEek!Eek!omot Eek!rof rebmeEek!merEek! Eek!ot deeEek!n uoy tahw
    si enEek!o tsrif siht sedisEek!eb gnirtsbus hcae ni retEek!carahc tsrifEek!
    eEek!Eek!hT .'V' *esaEek!crewEek!ol* nEek!Eek!o pu Eek!gnirts Eek!siEek!ht
    tilpEek!S"


    Done it? Awesome. Next, it's just a simple matter of undoing what happens
    when a preschooler dumps a bucket of LEGO blocks on the keyboard. Kids,
    amiright? You'll want to remove all the instances of the word 'Eek!' in the
    remaining string please (case sensitive, of course).

    Oh, I also forgot that I accidentally reversed the whole string too. Flip
    it back around after you've dealt with the 'Eek!'s, if you will.

    It should be looking a lot better now. I left the instructions for what to
    do now at the start of the remaining string. Do what it says and save the
        answer somewhere safe for tomorrow's challenge - it's key info.

    Thanks for helping clean up this mess! 🧹 See you tomorrow!

</details>

<details>
<summary><a href="https://blog.barbaralaw.me/huntober-2022-day-3">The Challenge - Day 3</a></summary>

    This week we will be discovering hidden messages by manipulating a given
    string. Your solutions should account for any non-empty string. On Friday we'll
    combine our functions to decode a message.

    Yesterday you should have come up with a few specific characters that we'll
    need today. Let's refer to those as our key characters.

    We need to create a function that will replace any instances of any of the key
    characters in a given string with an empty space (' '). See below for an
    example with an example set of key characters.

    Remember to keep your code somewhere safe, as you'll need it to decrypt this
    week's message!

    example key characters -> 'A','_','K','E','Y','!'

    input: 'AyouEcould!thinkKthisAisYhard_toYreadKbeforeYreplacingEthe_keyYcharacters'
     implement key replacement function
    output: ' you could think this is hard to read before replacing the key characters'

    You didn't think I'd just give you the key for the week and let you skip Day 2, did you?


</details>

<details>
<summary><a href="https://blog.barbaralaw.me/huntober-2022-day-4">The Challenge - Day 4</a></summary>

    Today's challenge is minor to give you all a bit of a break halfway through the
    challenge week, but there are a couple of side quests I'm going to throw out
    for those with extra time on their hands.

    So far we've swapped out calculator characters, cleaned up after a cat and a
    preschooler, and placed some spaces. Today is simple! Given a string, reverse
    it. Any details like whitespace, letter casing, or punctuation should be
    preserved and flipped along with the rest of the string. For example:

    "   The white space at the beginning of this string doesn't match the
    whitespace at the end. " // reverse it " .dne eht ta ecapsetihw eht hctam
    t'nseod gnirts siht fo gninnigeb eht ta ecaps etihw ehT   "

    🏅 Some extra work

    By now you should have written a function for each day so far. If not, go back
    and finish those up! Here are some things I'd suggest doing to build a deeper
    understanding of Strings and their manipulation:

    Explain your functions. Practice talking through your code.  Check your
    function, parameter, and variable names. Good code should be clear to follow
    and should document itself.  Rewrite your functions, taking a different
    approach. If you used String methods, try looping, and vice versa. Solve the
    problem via an alternate route and look for pros and cons of each.  If you
    haven't yet, use the 4 functions you have so far (in order, Calculator fix ->
    Use the Day 2 key to add spaces -> Reverse the string), on our secret message.
    Compare your answer so far with others!

</details>

<details>
<summary><a href="https://blog.barbaralaw.me/huntober-2022-day-5">The Challenge - Day 5</a></summary>

    So, I may have bitten off a bit more than I can chew this week. Will you
    help me out?

    My friend has invented a 'Best Cat-Themed Pun of a TV Show Title Ever'
    award and I promised I'd help her with the submissions. The problem is, I
    didn't realize just how much help she would need whittling down the
    submissions to the finalists. Between work, family, and Huntober, I just
    don't have time to get the final list over to her. Can you help?

    Here is a comma-separated list of the submissions:

    "The Pawshank Redemption,Caturday Night Live,Only Meworders in the
    Building,I Love Mewcy, Mewsummer Meowders,The Golden Purrs, Purrlandia
    ,Meowpardy, Meowstery Science Theater: Purrthousand, Amewican Idol,Dog
    City,Doctor Mew , The Meowing Fed,Mew Peter,The Vicar of Dogley,
    Kittens,Meownton Abbey,Pets and the Kitty,Dogis and Bonehead,Pawlty Meowers
    ,The Meowpet Show,Barkos,The Catbert Purrport,The Pawffice,The Dogford
    Files, Battlestar Catlactica,Catlumbo,SpongeDog Squarepants,NYPD Mew
    ,Fluffy the Meowpire Purrer,The Inbemewners,Meowder She Wrote,Paw &
    Order,30 Dog, Pawvatar: The Last Meowbender,The Pawnight Show,Arrested
    Dogvelopment,Furiends,Mewie,Curb Your Dogthusiasm,Teenage Mewtant Ninja
    Turtles,Phineas and Purrb,Paw Trek, Paw Trek: The Next Mewination, Twin
    Mewks, *C*A*T*S*,DogTales, Game of Bones, House of the Meowgon,The
    Purrlight Zone,Breaking Bone,The Meowre,The Dogpranos,The Rings of Meower,
    The KIT Crowd,Strangepaw Things ,Catman: The Animeowted Series,Meowter Call
    Saul,Mewgerton ,Obark,Mewphoria,La Casa de Pawpel,Rick & Meowty,Amewican
    Purror Story, Mewcifer,PawndaVision,Dogxter,The Meowndalorian, Dog
    Lasso,Bark,Meowdern Pawmily , Meowtlander,Bone Mirror,Barks and
    Recreation,How to Get Away with Meowder,Boneland ,Meowther
    Ted,Mewtopia,Mewey,The Mewkie Meowse Doghouse,Mewster Rogers' Neighborhood"

    There are some very strict rules that the pun submissions had to follow. I
    need to know which of these cat puns made the cut. I promise tomorrow we'll
    get back to decoding our secret message, and coincidentally, I'm pretty
    sure the number of these puns that met the criteria will match a key
    sequence value we'll need tomorrow. Isn't that lucky?

    Here are the rules these submissions had to follow:
    * No empty spaces at the start or end of the submission (my friend can't
      stand when people don't follow directions)
    * Cannot contain 'dog', 'bark', or 'bone' in any combination of upper or
      lower case (canine trolling can't be stopped)
    * Total length of pun cannot be a multiple of 5 (this includes spaces and
      punctuation)
    * The sum of the charCodes of the 1st and last characters must be odd (my
      friend's a bit of a character, but she's great once you get to know her)
    * Character directly after the middle of the string may not be 'e' (For
      example the character to check in even-length string center is t, for odd
      an example would be weird -> 'r')
    * Must have an even number of lowercase letters (do not count punctuation
      or spaces as letters)
    * Must have at least 2 capital letters (honestly, I'm a little worried
      these requirements are too strict)
    * Must not contain a capital 'S' (definitely too strict. What does S even
      have to do with cat puns?)

    Send me a DM of the puns that made the cut on Twitter, and go ahead and
    save the final count to use tomorrow. Thanks!
</details>

<details>
<summary><a href="https://blog.barbaralaw.me/huntober-2022-day-6">The Challenge - Day 6</a></summary>

    Thanks for all your help yesterday, you guys are cool cats! Today's challenge
    will have you removing decoy characters from a string.

    Write a function that, when given a non-empty string, and positive integer X,
    removes every Xth character from the string. Counting should begin from the
    first element in the string and should continue in that pattern until the end
    of the string.

    For example:

        -For the string below and 4 "Thies its H alltowe!en!? Th#is Tis
        GHalolomeen$!" -remove decoy strings "This is Halloween! This is
        Halloween!"

        -For the string below and 5 "The LBachyelor^ is ma tehrrib le tpelev!isioOn
        sh8ow." -remove decoy strings and preach 🙌 "The Bachelor is a terrible
        television show."

    🧩 Start Putting it Together

    Tomorrow is day 7 of 7, and you'll be receiving a final function assignment as
    well as the task of putting all of your other functions from the week together
    in sequence.

    If you like, you can get started on piecing together your functions today.
    Please remember that the functions must be performed on the provided string in
    order. If you do things out of order it will get messy very fast.

    It is totally up to you how you want to organize your code. Some may choose to
    create a master decoding function that calls each helper function as needed,
    while others may prefer to chain the function calls separately. Up to you.

    Note: Day 2 and Day 5 were side-projects, and their real purpose was to provide
    you with inputs for this final decoding. Day 2's key characters and Day 5's
    final count will be used as arguments for Day 3 and Day 6's functions,
    respectively.

    Here's the encrypted string for the week, enjoy!
    https://blog.barbaralaw.me/huntober-2022-day-6

    encryptedMsg =
    "e!!Igv)t5lltBcvbdeDH3dVw!OOtI#Aa.ZMDu7WYpP^VVjDc4I50iv#ylhgmQfs"

    Do any of you have any guesses about what the message could be? I think it'll
    stay unsolved until tomorrow, but who knows?
</details>

<details>
<summary><a href="https://blog.barbaralaw.me/huntober-2022-day-7">The Challenge - Day 7</a></summary>

    Oooh, yeah! Here it is, the final function you'll need in your string-decoding
    arsenal this week. Today's challenge might not be too trying after all the
    others, but you never know!

    Today you'll need to create a function that swaps each letter of the alphabet
    for its opposite. A letter's opposite is one that, if the alphabet were flipped
        Z-A, would be the same number of letters in, and which would also have the
        opposite case.

    Examples:

    'A'  // first letter of the alphabet, uppercase 'z'  // last letter of the
    alphabet, lowercase

    'p'  // 16th letter of the alphabet, lowercase 'K'  // 16th letter from *end*
    of alphabet, uppercase

    'vCZNKOV: 0 MFNYVI LI KFMXGFZGRLM XSZMTVH' // function replaces letters with
    opposites 'Example: 0 number or punctuation changes'

    Do me a favor and try to solve it a couple of different ways to see which you
    preferred and why.

    🧩 Put it all Together

    Finally! We have every function needed to decode the gobbledygook I shared a
    week ago! Some of you already figured it out yesterday (bravo!), but let's
    pretend you didn't.

    Please use the daily functions, in order, to decode the week's secret message.
    Then, when you feel good about your result, go ahead and tweet the string with
    no explanation and #huntober2022, you earned it.

    Two things to note:

    It's very important that the functions are called in the order they were given
    (e.g. Day 1 first, Day 7 last), as any deviation could throw things far out of
    whack Day 2 and Day 5 weren't designed to be part of this overall decoder. The
    answers you got on those days should be used as inputs for Days 3 & 6
    respectively

</details>

# Week 2

This week our challenges all deal with Arrays! Their purpose is to store a
collection of things under a single reference name, but the way they are set up
and used in JavaScript is a little different from other programming languages.
If you're coming from a different language, be sure to check out what's
different! While working on our challenges, feel free to use JavaScript's
built-in Array methods.

<details>
<summary><a href="https://blog.barbaralaw.me/huntober-2022-day-8">The Challenge - Day 1</a></summary>
    Do you know how to compare arrays? Not sure? Don't worry, you'll figure it
    out...

    Today's task is to write a function that will check equality between 2
    arrays with a particular structure.

    The arrays will:

    Be of equal size Will each contain some number (X) arrays Each inner array
    will contain that same number (X) primitive elements All the nested
    primitives within each array must strictly match to return a true result.
    Any mismatches will return false.

    For example:

        // each of these arrays have 3 nested arrays of 3 strings each
        const arr1 = [['a','b','c'],['d','e','f'],['g','h','i']]
        const arr2 = [['a','b','c'],['d','e','f'],['g','h','i']]
        const arr3 = [['a','B','c'],['d','E','f'],['g','H','i']]
        const arr4 = [['a','b','c'],['g','h','i'],['d','e','f']]

        // if we were to use our function to compare all the possible pairs
        // ONLY arr1 vs arr2 would return true

        checkEquality(arr1, arr2) => true
        checkEquality(arr1, arr3) => false
        checkEquality(arr1, arr4) => false
        // etc.

    Good luck! Check back tomorrow for the next challenge of the week!
</details>

<details>
<summary><a href="https://blog.barbaralaw.me/huntober-2022-day-9">The Challenge - Day 2</a></summary>

    So it turns out that some of the information I stored ever-so-safely in arrays
    just isn't looking right. I'm not going to be happy until it feels right, you
    know what I mean? Could you help me rearrange things a bit?

    I need twin functions, a function that swaps a given primitive value in a given
    1-dimensional array to an index to the left, and another that swaps it to the
    right.

    Some things to note:

    If the given value is on the edge of the array and can't move in that
    direction, don't move it.  The array passed in should be mutated by this
    function. Scandalous, I know.
    Example:

        myArray = ['abc', 'xyz', 1, 2, 'Hey!']

        // call move left function with 'xyz' and myArray as arguments
        console.log(myArray)   // ['xyz', 'abc', 1, 2, 'Hey!']

        // call move left function again, same arguments
        // Note that 'xyz' is already as far left as it can go
        console.log(myArray) // ['xyz', 'abc', 1, 2, 'Hey!'] no change

        // call move right function this time, with 2 and myArray as arguments
        console.log(myArray) // ['xyz', 'abc', 1, 'Hey!', 2]

        // call move right function again, same arguments
        // Note that 2 is already as far right as it can go
        console.log(myArray) // ['xyz', 'abc', 1, 'Hey!', 2] no change

    Got it? Great! I can't wait to get moving things around.
</details>
<details>
<summary><a href="https://blog.barbaralaw.me/huntober-2022-day-10">The Challenge - Day 3</a></summary>

    Today's challenge is a bit of a tangent, but I think it's pretty powerful.
    It's inspired by my favorite Codewars kata ever, Moving Zeros To The End.
    This is my favorite kata because the first time I did it, my approach was
    so convoluted compared to the top-voted solution, which was a thing of
    beautiful simplicity. I think the moment I saw that solution something
    clicked for me and I realized the power of the built-in Javascript methods.

    Today I'd like you to write a function that takes in a given array of
    strings and move any entries containing the letter 'a' to the front, and
    then move any entries that have over 3 characters to the back. Please
    preserve the order of things while you do this!

    Example:

        myArr = ['hi', 'hello', 'howdy', 'hola', 'hej', 'hallo', 'heyyy']
        // move things around
        => ['hola', 'hallo', 'hi', 'hej', 'hello', 'howdy', 'heyyy']

    Have fun!
</details>

<details>
<summary><a href="https://blog.barbaralaw.me/huntober-2022-day-11">The Challenge - Day 4</a></summary>

    Imagine, if you will, an array with length X, with each of its entries having X
    number of primitives as their entries. Now imagine it arranged as a grid.

    // for the less imaginative among us :)
    [[0,1,2],[3,4,5],[6,7,8]]

    // as a grid
    [
        [0,1,2],
        [3,4,5],
        [6,7,8]
    ]

    Still with me? I hope so! Today I need your help moving some things around
    again. I'm always rearranging.

    Please write twin functions that each take in a given value that will only
    appear once within a given array of a similar structure to the one described
    above, which will either move that value up one row or down one row in the
    array, keeping its same horizontal position. It will essentially swap places
    with whatever was where it needed to be. Just like in Day 2, don't do anything
    if the given value is already as high or low as it can get.

    Oh, and go ahead and mutate the given array. We're livin' on the wild side!

    Examples:

    myGrid = [['a', 'b', 'c'], ['d', 'e', 'f'], ['g', 'h', 'i']]

    // call move up function with 'h' and myGrid
    console.log(myGrid) = [['a', 'b', 'c'], ['d', 'h', 'f'], ['g', 'e', 'i']]

    // call move up function again, same arguments
    console.log(myGrid) = [['a', 'h', 'c'], ['d', 'b', 'f'], ['g', 'e', 'i']]

    // call move up function again, same arguments
    // Note that 'h' is already as far left as it can go
    console.log(myGrid) = [['a', 'h', 'c'], ['d', 'b', 'f'], ['g', 'e', 'i']]

    // call move down function this time, with 'f' and myGrid as arguments
    console.log(myGrid) = [['a', 'h', 'c'], ['d', 'b', 'i'], ['g', 'e', 'f']]

    // call move down function again, same arguments
    // Note that 'f' is already as far down as it can go
    console.log(myGrid) = [['a', 'h', 'c'], ['d', 'b', 'i'], ['g', 'e', 'f']]

    Good luck, see you tomorrow!

</details>

<details>
<summary><a href="https://blog.barbaralaw.me/huntober-2022-day-12">The Challenge - Day 5</a></summary>

    Have you ever seen something at the store and thought to yourself, "I could
    make that myself"? If you have, then you may have noticed that sometimes just
    because we can do a thing ourselves, it might not be the best idea.

    Sure, sometimes your Do It Yourself version is perfection and everything you
    could've dreamed of, but not always. Sometimes the item you could've bought
    cost less than the supplies you ended up buying to make it yourself, sometimes
    the store item had features you couldn't DIY or the quality was much better
    than what you ended up with. It's not uncommon.

    If you've not had an opportunity to learn this life lesson yet, or if you
    haven't transferred that lesson over to your code yet, don't despair! You're
    about to learn.

    Today your challenge is 2-parts: first, the DIY, and then the 'store-bought'.

    1. Please create a function that will take in an array like we've been working
       with all week (X-inner arrays of X-primitive values each) and shuffle it up
       in place. Do your best to have a thorough, random shuffle in a single call
       of your function.  Don't move on to part 2 until you've done part 1!

    2. You're probably feeling pretty good about your shuffle function and I'm
       betting it's amazing. How long did it take? Your second task today is to
       google how to shuffle a 2D array and read about why some approaches are
       better than others. Find a shuffle method that you like. How does it compare
       in speed, randomness, and thoroughness to yours?  My goal with this
       challenge is to hopefully show you that often finding a method or other code
       online is not only OK, but a time-saver and sometimes better than what you
       could've done yourself! If you walk away with that knowledge, I'm a happy
       camper.

    See you tomorrow!

</details>

<details>
<summary><a href="https://blog.barbaralaw.me/huntober-2022-day-1">The Challenge - Day 6</a></summary>

    This week has only 6 days of challenges, and this is day 6. Ready to mix it up
    and put those array functions to good use? I hope so!

    Today you'll be plugging in your functions to a skeleton react project to
    create a sliding puzzle game. Remember those things? I've added comments to the
    project Codepen, but before you click over there let's go over some key tasks
    and notes.

    Here is the Codepen for the project: https://codepen.io/blawblawLaw/pen/xxjMNrN

    You'll see 3 files: html, css, and js already over there. Please do the
    following:

    Fork the Codepen if it didn't automatically Add a link to your Github or
    Twitter to the footer in the html file Insert your daily functions where noted
    in the js file Note that they need specific names and parameters Remember to
    insert any noted code from the comment within the functions Play your game! Are
    there bugs? No worries, debug away This is my first time having people
    blind-build functions to plug into a project, so if you get stuck feel free to
    reach out! It could be that I need to modify the instructions.

    I want to point out that I did call it a skeleton project because it is! Feel
    free to make it your own and add styles or content. Personally, I want to
    investigate sprites and try that out for the individual tiles so that I can
    easily use any square image and have a grid size selector.

</details>

# Week 3
This week we'll be nurturing our inner code weenies and working on bringing up
the quality of code and work. Remember, be proud of what you create but always
be open to improvement!

<details>
<summary><a href="https://blog.barbaralaw.me/huntober-2022-day-17">The Challenge - Day 1</a></summary>

    Today's challenge is to simplify the example function below based on what we've
    discussed today. I also challenge you to look at some recent functions you've
    written and apply these same principles to those!

    function myExampleFunction(arr) {
        if (arr != null) {
            if (arr.length !== 0) {
                if (arr[0].length !== 0) {
                    if (arr.length > 10) {
                        arr.push('maximum')
                    } else if (arr.length === 10) {
                        arr.push('maximum')
                    } else {
                        if (arr[0] === 'must be maximum') {
                            arr.push('failure')
                        } else if (arr[0] === 'flexible') {
                            arr.push('success')
                        }
                    }
                }
            }
        }
        return arr
    }

</details>

<details>
<summary><a href="https://blog.barbaralaw.me/huntober-2022-day-18">The Challenge - Day 2</a></summary>

    Today your challenge is to apply the principles of helper functions and
    self-documenting code to this mess of a code snippet below. Take time to play
    with the function, find out what is going on, and make improvements. You can
    even try to apply our readability principles from yesterday!

    As will all our challenges this week, go forth and do the same in some of your
    own recent code!

    function comp1(a, b) {
        const c = new Date()
        const da = Math.ceil(Math.abs(c.getTime() - a.getTime()) / (1000*60*60*24))
        const db = Math.ceil(Math.abs(c.getTime() - b.getTime()) / (1000*60*60*24))
        const as = a.toDateString()
        const bs = b.toDateString()
        if (da * 2 <= db) {
            return `If you thought ${a} was a long wait, wait until you see how long it is until ${b}.`
        } else if (da < db) {
            return `Don't worry, ${b} isn't too much farther away than ${a} in the scheme of things.`
        } else if (da === db) {
            return `They're the same number of days away!`
        } else {
            return `You know ${a} is closer, right?`
        }
    }

    function comp2(a, b) {
        const c = new Date()
        const da = Math.ceil(Math.abs(c.getTime() - a.getTime()) / (1000*60*60*24))
        const db = Math.ceil(Math.abs(c.getTime() - b.getTime()) / (1000*60*60*24))
        const as = a.toDateString()
        const bs = b.toDateString()
        if (da < db) {
            const x = Math.floor(db/da)
            return `Looks like ${b} is ${x} times farther away than ${a}.`
        } else if (da === db) {
            return `Same exact date there, mate.`
        } else {
            const x = Math.floor(da/db)
            return `Looks like ${a} is ${x} times farther away than ${b}.`
        }
    }

    function tot(a, b) {
        const c = new Date()
        const da = Math.ceil(Math.abs(c.getTime() - a.getTime()) / (1000*60*60*24))
        const db = Math.ceil(Math.abs(c.getTime() - b.getTime()) / (1000*60*60*24))
        const as = a.toDateString()
        const bs = b.toDateString()
        const x = db-da
        return `You have ${da} days left until ${a}, and ${db} days left until ${b}.`
    }

    // feel free to plug these example dates into your functions
    const dateA = new Date(2022,09,26)
    const dateB = new Date(2022,11,25)

</details>


