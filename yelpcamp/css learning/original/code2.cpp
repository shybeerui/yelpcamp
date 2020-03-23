//Rui Xu
#include <bits/stdc++.h>
using namespace std;
int main(){
	stack<int> s;
	vector<int> tem = {73,74,75,71,69,72,76,73};
	vector<int> res(tem.size());
	unordered_map<int,int> m;
	int pos = 0;
	for(auto t : tem){
		m[t] = pos;
		pos++;
	}
	
	int i = 0;
	while(i < tem.size()){
		int r = 0;
		while(!s.empty() && tem[i] > s.top()){
			r++;
			res.push_back(r);
			s.pop();
		}
			
		s.push(tem[i]);
		i++;
	}
	res.push_back(0);
	for(auto m : res)
		cout << m;
}