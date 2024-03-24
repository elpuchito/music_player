import os

# specify the directory you want to scan for files
directory = '/Users/oscarcaceres/Documents/GitHub/music_player/public/audio/juan-luis'

# iterate over all files in the directory
for filename in os.listdir(directory):
    # create new filename by replacing spaces and commas with underscores
    new_filename = filename.replace(' ', '_').replace(',', '_')
    
    # create full file paths
    old_file_path = os.path.join(directory, filename)
    new_file_path = os.path.join(directory, new_filename)
    
    # rename the file
    os.rename(old_file_path, new_file_path)

print("All files have been renamed.")
