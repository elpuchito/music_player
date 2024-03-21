import os

# specify the directory you want to scan for files
directory = '/Users/oscarcaceres/Documents/GitHub/music_player/public/audio'

# use os.listdir to get the names of all files in the directory
file_names = os.listdir(directory)

# print the array of file names
print(file_names)