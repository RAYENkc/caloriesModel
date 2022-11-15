
import pandas as pd
import joblib
import pandas as pd
# print(sys.argv[1])
# print(sys.argv[2])

# Load the model from the file
knn_from_joblib = joblib.load('filename.pkl')

# Use the loaded model to make predictions
x=[ [0,20,166,60,14,94,40.3] ]

resualt = knn_from_joblib.predict(x)



print(resualt)