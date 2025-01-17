const router = require('express').Router();
const { createContact, getAllContacts, getContactById, updateContact, deleteContact } = require('../controllers/contact.controller');

router.post('/', createContact);
router.get('/', getAllContacts);
router.get('/:id', getContactById);
router.patch('/:id', updateContact);
router.delete('/:id', deleteContact);


module.exports = router;