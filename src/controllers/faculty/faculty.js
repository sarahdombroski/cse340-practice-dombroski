import { getFacultyById, getSortedFaculty } from '../../models/faculty/faculty.js';

// Route handler for the faculty list page
const facultyListPage = (req, res) => {
    const faculty = getSortedFaculty();
    
    // Handle sorting if requested
    const sortBy = req.query.sort || 'name';
    const sortedFaculty = getSortedFaculty(sortBy);
    
    res.render('faculty/list', { 
        title: 'Faculty List',
        faculties: sortedFaculty,
        currentSort: sortBy
     });
};

// Route handler for individual faculty detail pages
const facultyDetailPage = (req, res, next) => {
    const facultyId = req.params.facultyId;
    const faculty = getFacultyById(facultyId);

    // If faculty doesn't exist, create 404 error
    if (!faculty) {
        const err = new Error(`Faculty ${facultyId} not found`);
        err.status = 404;
        return next(err);
    }

    res.render('faculty/detail', {
        title: `${faculty.name}`,
        faculty: { ...faculty }
    });
};

export { facultyListPage, facultyDetailPage };