//Rui Xu

#include <bits/stdc++.h>

using namespace std;

int main(){
	vector<int> num = {9,9,9};
	num.back()++;
	int carry;
	int n = num.back(), pos = num.size()-1;
	while(n >= 10){
		carry = n / 10;
		num[pos] %= 10;
		pos--;
		if(pos < 0)
			break;
		num[pos] += carry;
		n = num[pos];
	}
	if(carry != 0)
		num.insert(num.begin(),carry);
	for(auto m : num)
		cout << m;
}