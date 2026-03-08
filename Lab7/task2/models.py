class Animal:
    def __init__(self,name,age,breed):
        self.name=name
        self.age=age
        self.breed=breed
    def speak(self):
        return "Sound"
    def info(self):
        return f"{self.name} is {self.breed} and is {self.age} years old"

class Dog(Animal):
    def speak(self):
        return "Rough"
    
class Cat(Animal):
    def speak(self):
        return "Meow"