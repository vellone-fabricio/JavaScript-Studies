#arbre
#va avoir des nodes
#uen seule function(noeud) -> quelle est son parent -getParent


# def getAncientCommon(noeudA, noeudB):
#   flag = False
#   premierAncA = [noeudA.getParent()]
#   premierAncB = [noeudB.getParent()]

#   while (not flag):

#     for i in premierAncA:
#       if (premierAncB.index(i) > -1):
#         flag = True
#         return i
#     for i in premierAncB:
#       if (premierAncA.index(i) > -1):
#         flag = True
#         return i
    
#     if (premierAncA.getParent() != Null):
#       premierAncA.push(premierAncA.getParent())
#     if (premierAncB.getParent() != null):
#       premierAncB.push(premierAncB.getParent())
    
  
#   return False

#escalier N marche, 3 maniere
# 1, 2, 3 step par fois


# def combEscalier(n):
#   if (n == 0):
#     return 1
#   elif (n < 0):
#     return 0
#   else:
#     return combEscalier(n-1)+combEscalier(n-2)+combEscalier(n-3)


# n = 3
# print(combEscalier(n))


def Factorial(n):
  if (n == 1):
    return n
  else:
    return n*Factorial(n-1)

n = 4
print(Factorial(n))


  
        

