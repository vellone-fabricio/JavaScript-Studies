def cast(chaine):
  transformation = 0
  count = len(chaine)

  for char in chaine:
    transformation = transformation*10 + (ord(char)-ord("0"))

  return transformation


valeur = "1"
print(cast(valeur))
valeur = "10"
print(cast(valeur))
valeur = "100"
print(cast(valeur))
grandValeur = "516879"
print(cast(grandValeur))

