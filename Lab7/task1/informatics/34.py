x=int(input())
d=int(input())
c=0
while x>0:
    if x%10==d:
        c+=1
    x//=10
print(c)