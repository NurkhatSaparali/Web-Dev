b=int(input())
d=0
p=1
while b>0:
    d+=b%10*p
    p*=2
    b//=10
print(d)