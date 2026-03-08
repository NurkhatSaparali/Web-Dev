a, n = input().split()
a = float(a)
n = int(n)

r = 1
for _ in range(n):
    r *= a

print(r)