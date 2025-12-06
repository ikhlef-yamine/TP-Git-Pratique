# test.py

from operations import addition, maximum, format_nom

def tester_addition():
    # Cas normal
    assert addition(5, 3) == 8, "Erreur sur addition(5, 3)"
    # Cas avec nombres négatifs
    assert addition(-10, 5) == -5, "Erreur sur addition avec négatifs"
    # Cas avec zéro
    assert addition(0, 100) == 100, "Erreur sur addition avec zéro"
    print("✅ Tests de la fonction addition réussis.")

def tester_maximum():
    # Cas normal
    assert maximum([1, 5, 2, 8, 3]) == 8, "Erreur sur maximum pour une liste standard"
    # Cas avec nombres négatifs
    assert maximum([-1, -5, -2, -8]) == -1, "Erreur sur maximum avec négatifs"
    # Cas avec liste vide (devrait retourner None)
    assert maximum([]) is None, "Erreur sur maximum pour une liste vide"
    # Cas avec un seul élément
    assert maximum([42]) == 42, "Erreur sur maximum avec un seul élément"
    print("✅ Tests de la fonction maximum réussis.")

def tester_format_nom():
    # Cas normal
    assert format_nom("alice", "dupont") == "DUPONT, Alice", "Erreur sur format_nom normal"
    # Cas avec des espaces
    assert format_nom("  marie", "curie  ") == "CURIE, Marie", "Erreur sur format_nom avec espaces"
    print("✅ Tests de la fonction format_nom réussis.")


print("--- Lancement des tests ---")

# Exécuter toutes les fonctions de test
tester_addition()
tester_maximum()
tester_format_nom()

print("--------------------------")
print("Tous les tests ont été exécutés. Si aucun message 'AssertionError' n'est apparu, tous les tests sont PASSÉS.")