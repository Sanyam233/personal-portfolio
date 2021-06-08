import sortingFrame1 from '../assets/projects/sortingVisualizer/Frame1.png';
import sortingFrame2 from '../assets/projects/sortingVisualizer/Frame2.png';
import sortingFrame3 from '../assets/projects/sortingVisualizer/Frame3.png';
import connect1 from '../assets/projects/connect/Frame1.png';
import connect2 from '../assets/projects/connect/Frame2.png';
import connect3 from '../assets/projects/connect/Frame3.png';
import dataTracking1 from '../assets/projects/covidDataTracking/Frame1.png';
import dataTracking2 from '../assets/projects/covidDataTracking/Frame2.png';
import dataTracking3 from '../assets/projects/covidDataTracking/Frame3.png';
import dataTracking4 from '../assets/projects/covidDataTracking/Frame4.png';


export const majorProjects = [
    {display : 'website', title : 'Sorting Visualizer', 
    description : 'Developed a web app that lets users visualize how different sorting algorithms work. Implemented Merge Sort, Quick Sort, Selection Sort, Bubble sort and Heap sort',
    technologies : ['React', 'JavaScript'],
    images : {frame1 : sortingFrame1,
    frame2 : sortingFrame2,
    frame3 : sortingFrame3},
    links : ['https://github.com/Sanyam233/sorting-visualizer/tree/master', 'https://sanyam233.github.io/sorting-visualizer']},
    {display : 'website', title : 'Connect.', 
    description : 'Developed a chat messenger web app using web sockets that lets users create personalized chat rooms in order to conduct chat meetings. Implemented join room and leave room announcements for better user experience',
    technologies : ['Flask', 'JavaScript', 'Git', 'Socket-IO'],
    images : {frame1 : connect1,
    frame2 : connect2,
    frame3 : connect3},
    links : ['https://github.com/Sanyam233/Connect.', 'http://connect-001.herokuapp.com/']},
    {display : 'mobile', title : 'COVID-19 Data Tracking', 
    description : 'Developed a covid-19 data tracking app, that makes use of multiple APIs to fetch covid-19 data for different countries and respresents them in a graphical format',
    technologies : ['Flutter', 'Rapid API', 'Dart'],
    images : {frame1 : dataTracking1, frame2 : dataTracking2, frame3 : dataTracking3, frame4 : dataTracking4},
    links : ['https://github.com/Sanyam233/Flutter/tree/master/Projects/covid_app']},
]

export const otherProjects = [{ title : 'Mine Sweeper', 
description : 'Developed a minesweeper game, which uses logical inferences as a decision matrix to decide next possible moves',
technologies : ['Python', 'Git'],links : ['https://github.com/Sanyam233/CS50-Introduction-to-Artificial-Intelligence-with-Python-/tree/master/minesweeper']},
{ title : 'Tic-Tac-Toe', 
description : 'Developed a minesweeper game, which uses logical inferences as a decision matrix to decide next possible moves',
technologies : ['Python', 'Git'],links : ['https://github.com/Sanyam233/CS50-Introduction-to-Artificial-Intelligence-with-Python-/tree/master/tictactoe']},
{title : 'Uber-Rides Clone', 
description : 'Developed a cross-platform Uber rides clone app',
technologies : ['Flutter', 'Dart'],links : ['https://github.com/Sanyam233/uber_clone']}]