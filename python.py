import csv
def readcsv():
    # read csv
    with open(r"C:\Users\leon8\OneDrive\Desktop\Programming\project 1\ACC\data.csv","r", encoding="utf-8") as file:
        # Skip header row
        csvreader = csv.reader(file)

        next(csvreader)
        column_age = 5
        column_salary = 2
        total_age = 0
        total_salary = 0
        count = 0
        for row in csvreader:
            if len(row) > column_age and len(row) > column_salary:
                if row[column_age].strip() and row[column_salary].strip(): 
                    count += 1
                    age = int(row[column_age])
                    salary = int(row[column_salary])
                    total_age += age
                    total_salary += salary

        if count > 0:
            mean_age = total_age / count 
            mean_salary = total_salary / count
            print('The average age of a SmartStart customer is:', mean_age)
            
            print('The average salary of a SmartStart customer is:', mean_salary)
    
        

readcsv()

