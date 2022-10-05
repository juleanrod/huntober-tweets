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

