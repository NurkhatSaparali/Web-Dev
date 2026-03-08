from models import Animal, Dog, Cat

animal=Animal("Name", 0, "Unknown")
dog=Dog("Arystanbek", 6, "Chihuahua")
cat=Cat("Nursultan", 7, "Sphinx")

animals = [dog, cat]
for x in animals:
    print(x.info())
    print(x.speak())