// This file was generated by liblab | https://liblab.com/

import { z } from 'zod';

export const importExportFileType = z.enum(['file']);

export type ImportExportFileType = z.infer<typeof importExportFileType>;
