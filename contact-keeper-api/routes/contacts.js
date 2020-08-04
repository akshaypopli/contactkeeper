const express = require('express');
const router = express.Router();

// @route   GET api/contacts
// @desc    Get all user's contact
// @access  private
router.get('/', (req, res)=> {
    res.send('Get all contacts of a user');
});

// @route   POST api/contacts
// @desc    Add new contact
// @access  private
router.post('/', (req, res)=> {
    res.send('Add Contact');
});

// @route   PUT api/contacts
// @desc    update contact
// @access  private
router.put('/:id', (req, res)=> {
    res.send('Update Contact');
});

// @route   DELETE api/contacts
// @desc    update contact
// @access  private
router.delete('/:id', (req, res)=> {
    res.send('Delete Contact');
});


module.exports = router;