# 有计划的状态管理

现在的改变没有任何约束，可以允许任何人更改任何地方。因此需要约束，不允许改变计划外的修改。

-  制定一个state修改计划，告诉store要修改什么
-  修改changeState方法 告诉他修改state时要按照计划修改

plan就是redux的reducer，changeState就是dispatch
