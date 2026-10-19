import { getFacultyBySlug, getSortedFaculty } from '../../models/faculty/faculty.js';

// Route handler for the faculty list page
const facultyListPage = async (req, res) => {
    // Handle sorting if requested
    const sortBy = req.query.sort || 'name';
    const sortedFaculty = await getSortedFaculty(sortBy);
    
    res.render('faculty/list', { 
        title: 'Faculty List',
        faculties: sortedFaculty,
        currentSort: sortBy
     });
};

// Route handler for individual faculty detail pages
const facultyDetailPage = async (req, res, next) => {
    const facultySlug = req.params.facultySlug;
    const faculty = await getFacultyBySlug(facultySlug);

    // If faculty doesn't exist, create 404 error
    if (Object.keys(faculty).length === 0) {
        const err = new Error(`Faculty ${facultySlug} not found`);
        err.status = 404;
        return next(err);
    }

    res.render('faculty/detail', {
        title: `${faculty.name}`,
        faculty: faculty
    });
};

export { facultyListPage, facultyDetailPage };