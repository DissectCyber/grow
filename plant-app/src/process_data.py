import pandas as pd

data = pd.read_csv('temperature_data.csv')

data.to_json('temperature_data.json', orient='records')
