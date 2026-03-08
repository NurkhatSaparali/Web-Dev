a = set(map(int, input().split()))
n = int(input())
other_sets = [set(map(int, input().split())) for i in range(n)]

print(all(a > s for s in other_sets))