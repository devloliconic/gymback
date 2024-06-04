/**
 * @swagger
 * /login:
 *   post:
 *     summary: Аутентификация администратора
 *     description: Этот эндпоинт используется для аутентификации администратора.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               login:
 *                 type: string
 *                 description: Логин администратора
 *               password:
 *                 type: string
 *                 description: Пароль администратора
 *     responses:
 *       200:
 *         description: Успешная аутентификация
 *       401:
 *         description: Неавторизован
 */
/**
 * @swagger
 * /user/login:
 *   post:
 *     summary: Аутентификация пользователя
 *     description: Этот эндпоинт используется для аутентификации пользователя.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 description: Email пользователя
 *               password:
 *                 type: string
 *                 description: Пароль пользователя
 *     responses:
 *       200:
 *         description: Успешная аутентификация
 *       401:
 *         description: Неавторизован
 */

/**
 * @swagger
 * /user/signUp:
 *   post:
 *     summary: Регистрация пользователя
 *     description: Этот эндпоинт используется для регистрации нового пользователя.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 description: Email пользователя
 *               password:
 *                 type: string
 *                 description: Пароль пользователя
 *     responses:
 *       200:
 *         description: Успешная регистрация
 *       401:
 *         description: Неавторизован
 */

// Другие запросы Swagger здесь...

/**
 * @swagger
 * /me:
 *   get:
 *     summary: Получить данные о текущем пользователе
 *     description: Этот эндпоинт используется для получения данных о текущем пользователе.
 *     responses:
 *       200:
 *         description: Успешное получение данных о пользователе
 *       403:
 *         description: Доступ запрещен
 */

/**
 * @swagger
 * /user/me:
 *   get:
 *     summary: Получить данные о текущем пользователе
 *     description: Этот эндпоинт используется для получения данных о текущем пользователе.
 *     responses:
 *       200:
 *         description: Успешное получение данных о пользователе
 *       403:
 *         description: Доступ запрещен
 */

/**
 * @swagger
 * /gym:
 *   get:
 *     summary: Получить список всех залов
 *     description: Этот эндпоинт используется для получения списка всех доступных залов.
 *     responses:
 *       200:
 *         description: Успешное получение списка залов
 *       422:
 *         description: Неверный запрос
 */

/**
 * @swagger
 * /gym/{id}:
 *   get:
 *     summary: Получить данные о зале по ID
 *     description: Этот эндпоинт используется для получения данных о зале по его уникальному ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Уникальный идентификатор зала
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Успешное получение данных о зале
 *       422:
 *         description: Неверный запрос
 */

/**
 * @swagger
 * /gym:
 *   post:
 *     summary: Создать новый зал
 *     description: Этот эндпоинт используется для создания нового зала.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               capacity:
 *                 type: integer
 *               phoneNumber:
 *                 type: string
 *               email:
 *                 type: string
 *               address:
 *                 type: string
 *               index:
 *                 type: string
 *     responses:
 *       200:
 *         description: Успешное создание нового зала
 *       422:
 *         description: Неверный запрос
 */
/**
 * @swagger
 * /gym/{id}/equipment:
 *   post:
 *     summary: Добавить оборудование в зал
 *     description: Этот эндпоинт используется для добавления нового оборудования в зал по его уникальному ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Уникальный идентификатор зала
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *     responses:
 *       200:
 *         description: Успешное добавление оборудования в зал
 *       422:
 *         description: Неверный запрос
 */

/**
 * @swagger
 * /gym/{id}/others:
 *   post:
 *     summary: Добавить другое оборудование в зал
 *     description: Этот эндпоинт используется для добавления нового типа оборудования в зал по его уникальному ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Уникальный идентификатор зала
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *     responses:
 *       200:
 *         description: Успешное добавление другого оборудования в зал
 *       422:
 *         description: Неверный запрос
 */
/**
 * @swagger
 * /gym/{id}/others/{othersId}:
 *   delete:
 *     summary: Удалить другое оборудование из зала
 *     description: Этот эндпоинт используется для удаления определенного типа оборудования из зала по уникальному ID зала и уникальному ID оборудования.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Уникальный идентификатор зала
 *         schema:
 *           type: integer
 *       - in: path
 *         name: othersId
 *         required: true
 *         description: Уникальный идентификатор другого оборудования
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Успешное удаление другого оборудования из зала
 *       422:
 *         description: Неверный запрос
 */

/**
 * @swagger
 * /gym/{id}/equipment/{equipmentId}:
 *   delete:
 *     summary: Удалить оборудование из зала
 *     description: Этот эндпоинт используется для удаления определенного оборудования из зала по уникальному ID зала и уникальному ID оборудования.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Уникальный идентификатор зала
 *         schema:
 *           type: integer
 *       - in: path
 *         name: equipmentId
 *         required: true
 *         description: Уникальный идентификатор оборудования
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Успешное удаление оборудования из зала
 *       422:
 *         description: Неверный запрос
 */
/**
 * @swagger
 * /gym/{id}/others/{othersId}:
 *   get:
 *     summary: Получить информацию о дополнительном оборудовании в тренажерном зале
 *     description: Конечная точка для получения информации о дополнительном оборудовании в тренажерном зале по его идентификатору.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Идентификатор тренажерного зала
 *         schema:
 *           type: integer
 *       - in: path
 *         name: othersId
 *         required: true
 *         description: Идентификатор дополнительного оборудования
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Успешное получение информации
 *       422:
 *         description: Неверный запрос
 */

/**
 * @swagger
 * /gym/{id}/equipment/{equipmentId}:
 *   get:
 *     summary: Получить информацию об оборудовании в тренажерном зале
 *     description: Конечная точка для получения информации об оборудовании в тренажерном зале по его идентификатору.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Идентификатор тренажерного зала
 *         schema:
 *           type: integer
 *       - in: path
 *         name: equipmentId
 *         required: true
 *         description: Идентификатор оборудования
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Успешное получение информации
 *       422:
 *         description: Неверный запрос
 */

/**
 * @swagger
 * /gym/{id}:
 *   put:
 *     summary: Обновить информацию о тренажерном зале
 *     description: Конечная точка для обновления информации о тренажерном зале по его идентификатору.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Идентификатор тренажерного зала
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               сapacity:
 *                 type: integer
 *               phoneNumber:
 *                 type: string
 *               email:
 *                 type: string
 *               address:
 *                 type: string
 *               index:
 *                 type: string
 *               contact_id:
 *                 type: integer
 *               address_id:
 *                 type: integer
 *     responses:
 *       200:
 *         description: Успешное обновление информации
 *       422:
 *         description: Неверный запрос
 */

/**
 * @swagger
 * /gym/{id}:
 *   delete:
 *     summary: Удалить тренажерный зал
 *     description: Конечная точка для удаления тренажерного зала по его идентификатору.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Идентификатор тренажерного зала
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Успешное удаление
 *       422:
 *         description: Неверный запрос
 */

/**
 * @swagger
 * /gym/{id}/equipment:
 *   post:
 *     summary: Добавить оборудование в тренажерный зал
 *     description: Конечная точка для добавления оборудования в тренажерный зал по его идентификатору.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Идентификатор тренажерного зала
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *     responses:
 *       200:
 *         description: Успешное добавление оборудования
 *       422:
 *         description: Неверный запрос
 */

/**
 * @swagger
 * /gym/{id}/others:
 *   post:
 *     summary: Добавить дополнительное оборудование в тренажерный зал
 *     description: Конечная точка для добавления дополнительного оборудования в тренажерный зал по его идентификатору.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Идентификатор тренажерного зала
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *     responses:
 *       200:
 *         description: Успешное добавление дополнительного оборудования
 *       422:
 *         description: Неверный запрос
 */
/**
 * @swagger
 * /gym/{id}/others/{othersId}:
 *   put:
 *     summary: Обновить информацию о дополнительном оборудовании в тренажерном зале
 *     description: Конечная точка для обновления информации о дополнительном оборудовании в тренажерном зале по идентификаторам тренажерного зала и оборудования.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Идентификатор тренажерного зала
 *         schema:
 *           type: integer
 *       - in: path
 *         name: othersId
 *         required: true
 *         description: Идентификатор дополнительного оборудования
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *     responses:
 *       200:
 *         description: Успешное обновление информации о дополнительном оборудовании
 *       422:
 *         description: Неверный запрос
 */

/**
 * @swagger
 * /gym/{id}/equipment/{equipmentId}:
 *   put:
 *     summary: Обновить информацию об оборудовании в тренажерном зале
 *     description: Конечная точка для обновления информации об оборудовании в тренажерном зале по идентификаторам тренажерного зала и оборудования.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Идентификатор тренажерного зала
 *         schema:
 *           type: integer
 *       - in: path
 *         name: equipmentId
 *         required: true
 *         description: Идентификатор оборудования
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *     responses:
 *       200:
 *         description: Успешное обновление информации об оборудовании
 *       422:
 *         description: Неверный запрос
 */
/**
 * @swagger
 * /client:
 *   get:
 *     summary: Получить всех клиентов
 *     description: Конечная точка для получения списка всех клиентов вместе с их билетами.
 *     responses:
 *       200:
 *         description: Успешное получение списка клиентов
 */

/**
 * @swagger
 * /client:
 *   post:
 *     summary: Создать нового клиента
 *     description: Конечная точка для создания нового клиента с указанными данными.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *               firstName:
 *                 type: string
 *               middleName:
 *                 type: string
 *               lastName:
 *                 type: string
 *               gender:
 *                 type: string
 *               birthDate:
 *                 type: string
 *                 format: date
 *     responses:
 *       200:
 *         description: Успешное создание нового клиента
 *       500:
 *         description: Внутренняя ошибка сервера
 */
/**
 * @swagger
 * /client/{id}:
 *   get:
 *     summary: Получить информацию о клиенте по идентификатору
 *     description: Конечная точка для получения информации о клиенте по его идентификатору вместе с его билетами.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Идентификатор клиента
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Успешное получение информации о клиенте
 *       422:
 *         description: Клиент не найден
 */
/**
 * @swagger
 * /client/{id}:
 *   put:
 *     summary: Обновить информацию о клиенте по идентификатору
 *     description: Конечная точка для обновления информации о клиенте по его идентификатору.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Идентификатор клиента
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *               firstName:
 *                 type: string
 *               middleName:
 *                 type: string
 *               lastName:
 *                 type: string
 *               gender:
 *                 type: string
 *               birthDate:
 *                 type: string
 *                 format: date
 *               ticketId:
 *                 type: integer
 *     responses:
 *       200:
 *         description: Успешное обновление информации о клиенте
 *       422:
 *         description: Клиент не найден
 */
/**
 * @swagger
 * /client/{id}:
 *   delete:
 *     summary: Удалить клиента по идентификатору
 *     description: Конечная точка для удаления клиента по его идентификатору.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Идентификатор клиента
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Успешное удаление клиента
 *       500:
 *         description: Внутренняя ошибка сервера
 */
/**
 * @swagger
 * /client/{id}/add-ticket:
 *   post:
 *     summary: Добавить билет клиенту
 *     description: Конечная точка для добавления билета клиенту по его идентификатору.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Идентификатор клиента
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               ticketId:
 *                 type: integer
 *     responses:
 *       200:
 *         description: Успешное добавление билета клиенту
 *       422:
 *         description: Неверный запрос
 */
/**
 * @swagger
 * /ticket:
 *   get:
 *     summary: Получить список всех билетов
 *     description: Конечная точка для получения списка всех билетов.
 *     responses:
 *       200:
 *         description: Успешное получение списка всех билетов
 *       500:
 *         description: Внутренняя ошибка сервера
 */
/**
 * @swagger
 * /ticket/{id}:
 *   get:
 *     summary: Получить информацию о билете по идентификатору
 *     description: Конечная точка для получения информации о билете по его идентификатору.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Идентификатор билета
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Успешное получение информации о билете
 *       422:
 *         description: Билет не найден
 */
/**
 * @swagger
 * /ticket:
 *   post:
 *     summary: Создать новый билет
 *     description: Конечная точка для создания нового билета с указанными данными.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               type:
 *                 type: string
 *               period:
 *                 type: string
 *               price:
 *                 type: number
 *     responses:
 *       200:
 *         description: Успешное создание нового билета
 *       500:
 *         description: Внутренняя ошибка сервера
 */
/**
 * @swagger
 * /ticket/{id}:
 *   put:
 *     summary: Обновить информацию о билете по идентификатору
 *     description: Конечная точка для обновления информации о билете по его идентификатору.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Идентификатор билета
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               type:
 *                 type: string
 *               period:
 *                 type: string
 *               price:
 *                 type: number
 *     responses:
 *       200:
 *         description: Успешное обновление информации о билете
 *       500:
 *         description: Внутренняя ошибка сервера
 */
/**
 * @swagger
 * /ticket/{id}:
 *   delete:
 *     summary: Удалить билет по идентификатору
 *     description: Конечная точка для удаления билета по его идентификатору.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Идентификатор билета
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Успешное удаление билета
 *       500:
 *         description: Внутренняя ошибка сервера
 */
/**
 * @swagger
 * /coach:
 *   get:
 *     summary: Получить список всех тренеров
 *     description: Конечная точка для получения списка всех тренеров вместе с их тренажерными залами.
 *     responses:
 *       200:
 *         description: Успешное получение списка всех тренеров
 *       500:
 *         description: Внутренняя ошибка сервера
 */
/**
 * @swagger
 * /coach/{id}:
 *   get:
 *     summary: Получить информацию о тренере по идентификатору
 *     description: Конечная точка для получения информации о тренере по его идентификатору вместе с его тренажерными залами и их адресами.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Идентификатор тренера
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Успешное получение информации о тренере
 *       422:
 *         description: Тренер не найден
 */
/**
 * @swagger
 * /coach:
 *   post:
 *     summary: Создать нового тренера
 *     description: Конечная точка для создания нового тренера с указанными данными.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               firstName:
 *                 type: string
 *               lastName:
 *                 type: string
 *               middleName:
 *                 type: string
 *               coast:
 *                 type: number
 *               gym_id:
 *                 type: integer
 *     responses:
 *       200:
 *         description: Успешное создание нового тренера
 *       500:
 *         description: Внутренняя ошибка сервера
 */
/**
 * @swagger
 * /coach/{id}:
 *   put:
 *     summary: Обновить информацию о тренере по идентификатору
 *     description: Конечная точка для обновления информации о тренере по его идентификатору.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Идентификатор тренера
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               firstName:
 *                 type: string
 *               lastName:
 *                 type: string
 *               middleName:
 *                 type: string
 *               coast:
 *                 type: number
 *               gym_id:
 *                 type: integer
 *     responses:
 *       200:
 *         description: Успешное обновление информации о тренере
 *       422:
 *         description: Неверный запрос
 */
/**
 * @swagger
 * /coach/{id}:
 *   delete:
 *     summary: Удалить тренера по идентификатору
 *     description: Конечная точка для удаления тренера по его идентификатору.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Идентификатор тренера
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Успешное удаление тренера
 *       500:
 *         description: Внутренняя ошибка сервера
 */

/**
 * @swagger
 * /workout:
 *   get:
 *     summary: Получить список всех тренировок
 *     description: Конечная точка для получения списка всех тренировок вместе с информацией о клиентах, тренерах и залах.
 *     responses:
 *       200:
 *         description: Успешное получение списка всех тренировок
 *       500:
 *         description: Внутренняя ошибка сервера
 */
/**
 * @swagger
 * /workout/{id}:
 *   get:
 *     summary: Получить информацию о тренировке по идентификатору
 *     description: Конечная точка для получения информации о тренировке по ее идентификатору вместе с информацией о клиенте, тренере и зале.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Идентификатор тренировки
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Успешное получение информации о тренировке
 *       422:
 *         description: Неверный запрос
 */

/**
 * @swagger
 * /workout/{id}:
 *   delete:
 *     summary: Удалить тренировку по идентификатору
 *     description: Конечная точка для удаления тренировки по ее идентификатору.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Идентификатор тренировки
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Успешное удаление тренировки
 *       422:
 *         description: Неверный запрос
 */
/**
 * @swagger
 * /workout:
 *   post:
 *     summary: Создать новую тренировку
 *     description: Конечная точка для создания новой тренировки с указанными данными.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               client_id:
 *                 type: integer
 *               coach_id:
 *                 type: integer
 *               gym_id:
 *                 type: integer
 *               date:
 *                 type: string
 *                 format: date
 *     responses:
 *       200:
 *         description: Успешное создание новой тренировки
 *       500:
 *         description: Внутренняя ошибка сервера
 */

/**
 * @swagger
 * /workout/{id}:
 *   put:
 *     summary: Обновить информацию о тренировке по идентификатору
 *     description: Конечная точка для обновления информации о тренировке по ее идентификатору.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Идентификатор тренировки
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               client_id:
 *                 type: integer
 *               coach_id:
 *                 type: integer
 *               gym_id:
 *                 type: integer
 *               date:
 *                 type: string
 *                 format: date
 *     responses:
 *       200:
 *         description: Успешное обновление информации о тренировке
 *       422:
 *         description: Неверный запрос
 */
/**
 * @swagger
 * /workout/user/{userId}:
 *   get:
 *     summary: Получить тренировки пользователя
 *     description: Конечная точка для получения списка тренировок определенного пользователя по его идентификатору.
 *     parameters:
 *       - in: path
 *         name: userId
 *         required: true
 *         description: Идентификатор пользователя
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Успешное получение списка тренировок пользователя
 *       422:
 *         description: Неверный запрос
 */
