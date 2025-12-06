# operations.py

def addition(a, b):
    """
    Retourne la somme de deux nombres.
    """
    return a + b

def maximum(liste_de_nombres):
    """
    Retourne le nombre maximum dans une liste.
    """
    if not liste_de_nombres:
        return None  # Gérer le cas d'une liste vide
    return max(liste_de_nombres)

def format_nom(prenom, nom):
    """
    Formate un nom et prénom en majuscules (NOM, Prénom).
    """
    nom_maj = nom.upper()
    prenom_capitalise = prenom.capitalize()
    return f"{nom_maj}, {prenom_capitalise}"