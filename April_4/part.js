function subStrAfterChars(str, char, pos)
{
  if(pos=='b')
   return str.substring(str.indexOf(char) + 1);
  else if(pos=='a') 
   return str.substring(0, str.indexOf(char));
  else
  return str;  
}

console.log(subStrAfterChars('Mernstack: JavaScript Tasks', ':','a'));

console.log(subStrAfterChars('Mernstack: JavaScript Tasks', 'T','b'));